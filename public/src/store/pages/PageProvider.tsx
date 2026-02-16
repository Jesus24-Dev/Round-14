import {useState, type ReactNode} from 'react'
import { PageContext } from './PageContext'

export const PageProvider = ({children}: {children: ReactNode}) => {
    const [page, setPage] = useState<string>('home');

    const updatePage = (newPage: string) => {
        setPage(newPage);
    }

    return (
        <PageContext.Provider value={{page, updatePage}}>
            {children}
        </PageContext.Provider>
    )
}