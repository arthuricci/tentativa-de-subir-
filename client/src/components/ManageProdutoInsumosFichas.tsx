import { useState, useEffect } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  produtoId: string;
  produtoNome?: string;
}

export default function ManageProdutoInsumosFichas({ isOpen, onClose, produtoId, produtoNome }: Props) {
  const utils = trpc.useUtils();
  const { data: insumos = [] } = trpc.insumos.list.useQuery();
  const { data: fichas = [] } = trpc.fichasTecnicas.list.useQuery();
  const { data: insumosCarregados } = trpc.produtos.getInsumos.useQuery({ produtoId }, { enabled: isOpen });
  const { data: fichasCarregadas } = trpc.produtos.getFichas.useQuery({ produtoId }, { enabled: isOpen });
  
  const [produtoInsumos, setProdutoInsumos] = useState<any[]>([]);
  const [produtoFichas, setProdutoFichas] = useState<any[]>([]);
  const [selectedInsumo, setSelectedInsumo] = useState<string>('');
  const [quantidade, setQuantidade] = useState<number>(0);
  const [selectedFicha, setSelectedFicha] = useState<string>('');
  const [quantidadeFicha, setQuantidadeFicha] = useState<number>(1);
  const { data: custo } = trpc.produtos.getCusto.useQuery({ produtoId }, { enabled: isOpen });

  useEffect(() => {
    if (insumosCarregados) {
      setProdutoInsumos(insumosCarregados);
    }
  }, [insumosCarregados]);

  useEffect(() => {
    if (fichasCarregadas) {
      setProdutoFichas(fichasCarregadas);
    }
  }, [fichasCarregadas]);

  const addInsumoMutation = trpc.produtos.addInsumo.useMutation({
    onSuccess: () => {
      utils.produtos.getInsumos.invalidate({ produtoId });
      setSelectedInsumo('');
      setQuantidade(0);
      toast.success('Insumo adicionado com sucesso!');
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  const removeInsumoMutation = trpc.produtos.removeInsumo.useMutation({
    onSuccess: () => {
      utils.produtos.getInsumos.invalidate({ produtoId });
      toast.success('Insumo removido com sucesso!');
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  const addFichaMutation = trpc.produtos.addFicha.useMutation({
    onSuccess: () => {
      utils.produtos.getFichas.invalidate({ produtoId });
      setSelectedFicha('');
      toast.success('Ficha técnica adicionada com sucesso!');
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  const removeFichaMutation = trpc.produtos.removeFicha.useMutation({
    onSuccess: () => {
      utils.produtos.getFichas.invalidate({ produtoId });
      toast.success('Ficha técnica removida com sucesso!');
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  const handleAddInsumo = () => {
    if (!selectedInsumo || quantidade <= 0) {
      toast.error('Selecione um insumo e defina a quantidade');
      return;
    }
    addInsumoMutation.mutate({
      produtoId,
      insumoId: selectedInsumo,
      quantidade,
      unidade: null,
    });
  };

  const handleRemoveInsumo = (produtoInsumoId: string) => {
    removeInsumoMutation.mutate({ produtoInsumoId });
  };

  const handleAddFicha = () => {
    if (!selectedFicha || quantidadeFicha <= 0) {
      toast.error('Selecione uma ficha técnica e defina a quantidade');
      return;
    }
    addFichaMutation.mutate({
      produtoId,
      fichaTecnicaId: selectedFicha,
      quantidade: quantidadeFicha,
    });
  };

  const handleRemoveFicha = (produtoFichaTecnicaId: string) => {
    removeFichaMutation.mutate({ produtoFichaTecnicaId });
  };

  const getInsumoNome = (insumoId: string) => {
    return insumos.find(i => i.id === insumoId)?.nome || 'Insumo desconhecido';
  };

  const getFichaNome = (fichaTecnicaId: string) => {
    return fichas.find(f => f.id === fichaTecnicaId)?.nome || 'Ficha desconhecida';
  };

  // Fichas já adicionadas ao produto
  const fichasAdicionadas = produtoFichas.map(pf => pf.ficha_tecnica_id);
  // Fichas disponíveis para adicionar (que ainda não foram adicionadas)
  const fichasDisponiveis = fichas.filter(f => !fichasAdicionadas.includes(f.id));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gerenciar Insumos e Fichas Técnicas</DialogTitle>
          <DialogDescription>
            Produto: <strong>{produtoNome}</strong>
          </DialogDescription>
        </DialogHeader>

        {custo && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Custo Fichas Tecnicas</p>
                <p className="font-semibold text-lg">R$ {custo.custoProdutoFichasTecnicas.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-600">Custo Insumos</p>
                <p className="font-semibold text-lg">R$ {custo.custoInsumosSeparados.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-gray-600">Custo Total</p>
                <p className="font-bold text-lg text-blue-600">R$ {custo.custoTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {/* Fichas Técnicas */}
          <div className="border-b pb-4">
            <h3 className="font-semibold mb-3">Fichas Técnicas Associadas</h3>
            
            {/* Adicionar Ficha Técnica */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-3">
              <div>
                <Label htmlFor="ficha-select">Ficha Técnica</Label>
                <Select value={selectedFicha} onValueChange={setSelectedFicha}>
                  <SelectTrigger id="ficha-select">
                    <SelectValue placeholder="Selecione uma ficha técnica" />
                  </SelectTrigger>
                  <SelectContent>
                    {fichasDisponiveis.length === 0 ? (
                      <div className="p-2 text-sm text-gray-500">
                        Todas as fichas técnicas já foram adicionadas
                      </div>
                    ) : (
                      fichasDisponiveis.map((ficha: any) => (
                        <SelectItem key={ficha.id} value={ficha.id}>
                          {ficha.nome}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantidade-ficha">Quantidade</Label>
                <Input
                  id="quantidade-ficha"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={quantidadeFicha || ''}
                  onChange={(e) => setQuantidadeFicha(parseFloat(e.target.value) || 1)}
                  placeholder="1"
                />
              </div>
              <Button 
                onClick={handleAddFicha} 
                disabled={addFichaMutation.isPending || fichasDisponiveis.length === 0}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                {addFichaMutation.isPending ? 'Adicionando...' : 'Adicionar Ficha Técnica'}
              </Button>
            </div>

            {/* Lista de Fichas Técnicas */}
            <div className="space-y-2">
              {produtoFichas.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  Nenhuma ficha técnica adicionada
                </p>
              ) : (
                produtoFichas.map((pf: any) => (
                  <div 
                    key={pf.id} 
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-sm">
                        {pf.ficha_tecnica?.nome || getFichaNome(pf.ficha_tecnica_id)}
                      </p>
                      {pf.ficha_tecnica?.rendimento_total && (
                        <p className="text-xs text-gray-600">
                          Rendimento: {pf.ficha_tecnica.rendimento_total} {pf.ficha_tecnica.unidade_rendimento || ''}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFicha(pf.id)}
                      disabled={removeFichaMutation.isPending}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Insumos Separados */}
          <div>
            <h3 className="font-semibold mb-3">Insumos Separados</h3>
            
            {/* Adicionar Insumo */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="insumo-select">Insumo</Label>
                  <Select value={selectedInsumo} onValueChange={setSelectedInsumo}>
                    <SelectTrigger id="insumo-select">
                      <SelectValue placeholder="Selecione um insumo" />
                    </SelectTrigger>
                    <SelectContent>
                      {insumos.map((insumo: any) => (
                        <SelectItem key={insumo.id} value={insumo.id}>
                          {insumo.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="quantidade">Quantidade</Label>
                  <Input
                    id="quantidade"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={quantidade || ''}
                    onChange={(e) => setQuantidade(parseFloat(e.target.value) || 0)}
                    placeholder="0"
                  />
                </div>
              </div>
              <Button 
                onClick={handleAddInsumo} 
                disabled={addInsumoMutation.isPending}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                {addInsumoMutation.isPending ? 'Adicionando...' : 'Adicionar Insumo'}
              </Button>
            </div>

            {/* Lista de Insumos */}
            <div className="space-y-2">
              {produtoInsumos.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  Nenhum insumo adicionado
                </p>
              ) : (
                produtoInsumos.map((pi: any) => (
                  <div 
                    key={pi.id} 
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-sm">
                        {getInsumoNome(pi.insumo_id)}
                      </p>
                      <p className="text-xs text-gray-600">
                        Quantidade: {pi.quantidade}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveInsumo(pi.id)}
                      disabled={removeInsumoMutation.isPending}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
