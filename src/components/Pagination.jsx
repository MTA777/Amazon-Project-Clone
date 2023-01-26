import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = () => {
  return (
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <span class="page-link">Previous</span>
        </li>
        <li class="page-item active" onClick={() => console.log("called")}>
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item " aria-current="page">
          <span class="page-link">2</span>
        </li>
        <li class="page-item ">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
