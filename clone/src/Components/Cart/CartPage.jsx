import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { IconShoppingCartPin } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import CartDetails from './CartDetails';
import { removeItemFromCart } from '../Slice/CartSlice';


const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  const handleRemoveItem = (item) => {
    
    dispatch(removeItemFromCart(item));
  };

  const totalAmount = cart.reduce((acc,item, ind)=> acc+item.price, 0)

  return (
    <>
      <AppHeader />
      <div className='flex justify-center m-0'>
        <div className='w-1/2 mt-5 mb-5'>
          <div className='card '>
            <div className='flex justify-between bg-gray-900 p-3 text-white font-bold border rounded'>
              <h5>Cart Calculation ({cart.length})</h5>
              <h2>Total Amount : {totalAmount}</h2>
            </div>
            <div className='card-body '>
              {cart?.length === 0 ? (
                <div>
                  <span>
                    <IconShoppingCartPin color='black' size={48} />
                  </span>
                  <p className='font-bold'>Your Cart is Empty</p>
                </div>
              ) : (
                <ul className='flex justify-between p-2 gap-4 flex-wrap'>
                  {cart?.map((item) => {
                    return (
                      <div className='flex w-60' key={item.id}>
                        <CartDetails
                          id={item.id}
                          imgUrl={item.images[0]}
                          Tittle={item.title}
                          Price={item.price}
                          quantity={item.quantity}
                          removeItem={()=> handleRemoveItem(item)}
                        />
                      </div>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
