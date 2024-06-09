import { Provider } from 'react-redux'

import { Table } from '@/components/ui/table'
import { Router } from '@/router'
import { store } from '@/services/store'

import s from '@/components/ui/table/table.module.scss'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <th className={s.th}>Name</th>
            <th className={s.th}>Cards</th>
            <th className={s.th}>Last Updated</th>
            <th className={s.th}>Created By</th>
          </Table.Row>
        </Table.Head>
        <tbody>
          <tr>
            <td className={s.td}>Pack Name</td>
            <td className={s.td}>4</td>
            <td className={s.td}>18/03/2021</td>
            <td className={s.td}>Ivan Ivanov</td>
          </tr>
          <tr>
            <td className={s.td}>Pack Name</td>
            <td className={s.td}>4</td>
            <td className={s.td}>18/03/2021</td>
            <td className={s.td}>Ivan Ivanov</td>
          </tr>
        </tbody>
      </Table.Root>
    </Provider>
  )
}
