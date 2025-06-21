import { Candidatura } from "@/application/entities/candidatura";
import { buscarCandidaturasUseCase } from "@/application/usecases/candidatura";
import { useQuery } from "@tanstack/react-query";

export function useGetCandidaturas() {
    return useQuery<Candidatura[]>({
        queryKey: ['candidaturas'],
        queryFn: async ()=>{
          return  await buscarCandidaturasUseCase();
        }
    })
}