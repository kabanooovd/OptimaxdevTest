import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import itemsListStyles from './ItemsList.module.css'
import {MainStoreType} from "../../bll/store";
import {apiResponseType} from "../../dal/marketAPI";
import {Item} from "../Item/Item";
import {Paginator} from "../common/Paginator/Paginator";

export const ItemsList = () => {

    const dispatch = useDispatch()

    const items = useSelector<MainStoreType, apiResponseType[]>(state => state.items.items)

    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage: number = 4

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItemPage = items.slice(firstItemIndex, lastItemIndex)

    const mappedItems = currentItemPage.map(item => (
        <div key={item.id} className={itemsListStyles.ItemContainer}>
            <Item itemData={item} />
        </div>
    ))

    return(
        <div>
        <div className={itemsListStyles.itemsListWrapper}>
            {mappedItems}
        </div>
            <Paginator itemsPerPage={itemsPerPage}
                       totalItems={items.length}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage}
            />
        </div>
    )
}




