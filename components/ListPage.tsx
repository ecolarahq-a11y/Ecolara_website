import PageHead from './PageHead'
import { Grid } from './Cards'
import { list } from '@/lib/content'
export default async function ListPage({ type, tag, title, intro, base }: any) {
  const items = await list(type)
  return (<><PageHead tag={tag} title={title} intro={intro} /><Grid items={items} base={base} /></>)
}
