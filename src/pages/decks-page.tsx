import { useGetDecksQuery } from '@/services/flashcards-api'

export function DecksPage() {
  const result = useGetDecksQuery()

  console.log(result)

  return <div>Decks page</div>
}
