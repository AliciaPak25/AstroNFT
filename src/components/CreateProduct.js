import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductActions from '../redux/actions/ProductActions';

function CreateProduct(props) {
    const [reload, setReload] = useState(false);

    useEffect(async () => {
        await props.getAllProducts();
    }, [reload]);

    async function handleAddProduct(event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target))
        // console.log(data);
        await props.addProduct(data);
        setReload(!reload);
    }

    async function handleDeleteProduct(event) {
        // console.log(event.target.id)
        await props.deleteProduct(event.target.id)
        setReload(!reload);
    }

    return (
        <div>
            <form onSubmit={handleAddProduct} style={{
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 100
            }}>
                <input placeholder='Name' type="text" name='name' />
                <input placeholder='Creator' type="text" name='creator' />
                <input placeholder='Price' type="text" name='price' />
                <input placeholder='file' type="text" name='file' />
                <textarea name="description" id="" cols="30" rows="10" defaultValue={'Agregar descripcion'}></textarea>
                <input placeholder='owner' type="text" name='owner' />
                <input placeholder='red' type="text" name='red' />
                <input placeholder='contract address' type="text" name='contractAddress' />
                <input placeholder='category' type="text" name='category' />
                <input placeholder='file type' type="text" name='fileType' />
                <button type='submit'>Cargar</button>
            </form>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {
                    props.allProducts?.map((product, index) =>
                        <div>
                            <p>{product.name}</p>
                            <button onClick={handleDeleteProduct} id={product._id}>Eliminar</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getAllProducts: ProductActions.getAllProducts,
    addProduct: ProductActions.addProduct,
    deleteProduct: ProductActions.deleteProduct,
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.ProductReducer.allProducts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);