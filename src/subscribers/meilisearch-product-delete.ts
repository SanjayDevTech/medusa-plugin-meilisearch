import { SubscriberArgs, SubscriberConfig } from '@biryanihouse/framework'
import { ProductEvents } from '@biryanihouse/utils'
import { MeiliSearchService } from '../modules/meilisearch'

export default async function meilisearchProductDeleteMeilisearchHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const productId = data.id

  const meilisearchService: MeiliSearchService = container.resolve('meilisearch')
  await meilisearchService.deleteDocument('products', productId)
}

export const config: SubscriberConfig = {
  event: ProductEvents.PRODUCT_DELETED,
}
