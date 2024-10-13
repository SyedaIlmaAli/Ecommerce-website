import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: { category: string } }) => {
  return <div className="mt-[50px] mb-[100px]">
    <CategoryPage params={params}/>
  </div>;
};

export default Category;
