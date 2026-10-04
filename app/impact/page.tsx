import ListPage from '@/components/ListPage'
// RULE: every outreach report is its own card and its own page. Never merge them.
export default function Impact() {
  return <ListPage type="outreachReport" tag="Impact" title="Outreach reports" intro="One report per school. Every number comes from a session we ran." base="/impact" />
}
