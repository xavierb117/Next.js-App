import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  const category = await getCategoryBySlug(categoryName)
  const filterFunction = await getModels({category : categoryName})

  return <h1><ModelsGrid title={category.displayName} models={filterFunction}/></h1>
}