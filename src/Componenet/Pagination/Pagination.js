
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react"
import { useSelector , useDispatch } from "react-redux";
import { getPageMovies } from "../../Redux/Action";

const Pagination = () =>{

    const [page , setPage] = useState(1)
    const PCount = useSelector(state => state.pageCount)
    const dispatch = useDispatch()

  useEffect( () => {dispatch(getPageMovies(page))} , [page] )

  
    // get page number
    const handlePageClick = (data) => {
        setPage(data.selected + 1)
    }

    return (
        <div>
          <ReactPaginate

                        breakLabel="..."
                        nextLabel="التالي"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        pageCount={PCount}
                        previousLabel="السابق"

                        containerClassName={"pagination justify-content-center p-3"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        previousLinkClassName={"page-link"}
                        breakClassName	={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}


          />
        </div>
      );
}
export default Pagination