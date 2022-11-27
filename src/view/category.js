import { useParams } from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer";
import { Layout } from "../componentes/Layout";

const CategoryView = () => {
    const { category } = useParams();
    
    return (
        <Layout>
            <ItemListContainer/>
        </Layout>
    );
    };
    
    export default CategoryView;
