import { supabase } from './supabase'

export async function obterOlhar(codigo: string) {
    const { data, error } = await supabase
        .from('olhar')
        .select('id, descricao, codigo, ativo')
        .eq('codigo', codigo)
        .eq('ativo', true)
        .single()

    if (error) {
        throw new Error(
            `Erro ao buscar o olhar "${codigo}": ${error.message}`
        )
    }

    if (!data) {
        throw new Error(
            `Olhar "${codigo}" não encontrado ou está inativo.`
        )
    }

    return data
}