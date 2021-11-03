import React, {useState} from "react";
import {useSelector} from "react-redux";
import itemsListStyles from './ItemsList.module.css'
import {MainStoreType} from "../../bll/store";
import {Item} from "../Item/Item";
import {Paginator} from "../common/Paginator/Paginator";
import {ItemsTypes} from "../../bll/itemsReducer";

export const ItemsList = () => {

    const items = useSelector<MainStoreType, ItemsTypes>(state => state.items.items)
    const isLoading = useSelector<MainStoreType, boolean>(state => state.appState.isLoading)

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
            <div className={itemsListStyles.PaginatorContainer}>
                {
                    !isLoading &&
                    <Paginator itemsPerPage={itemsPerPage}
                               totalItems={items.length}
                               currentPage={currentPage}
                               setCurrentPage={setCurrentPage}
                    />
                }
            </div>

        </div>
    )
}




