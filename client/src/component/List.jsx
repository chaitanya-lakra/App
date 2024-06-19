
import { MdOutlineLocalOffer as Badge } from "react-icons/md";
const  List = ({newdata})=>{
    return(
        <>
         {
            newdata ? (

              newdata.map(item => {
                return (
                  <div className="list-container">
                    <div className="list-wrapper-left">
                      <img src={item.detailUrl} alt="" style={{ width: 200, height: 200 }} />
                      <div>
                        <p style={{ fontWeight: 600 }}>{item.title.shortTitle}</p>
                        <p style={{ color: 'green' }}>{item.discount}</p>
                        <p className='price'>₹{item.price.cost}</p>
                      </div>
                    </div>
                    <div className="list-wrapper-right">
                      <p style={{ fontWeight: '600' }}>{item.title.longTitle}</p>
                      <p style={{ color: '#6B7280' }}>82 Ratings and 2 Reviews</p>
                      <span style={{ fontWeight: 600 }}>₹{item.price.cost}&nbsp;<strike style={{ color: '#9CA3AF' }}>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;<span style={{ color: '#059669' }}>{item.price.discount}off</span>
                      <p style={{width:'100%'}}>{item.description}</p>   
                      <p style={{ fontWeight: 500 }} >Available Offers</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;Get extra 20% off upto ₹50 on 1 item(s) T&C</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;Get extra 30% off (price inclusive of discount) T&C</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;Sign up for Pay Later and get Gift card worth ₹100* Know more</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;Buy 2 items save 5% ; Buy 3 items save 10% T&C</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;5% Cashback on Flipkart Axis bank Credit card</p>
                      <p ><span><Badge style={{color: '#059669'}} /></span>&nbsp;No cost EMI on bajaj Finserv EMI card on cart value above ₹2999 T&C</p>
                    </div>
                  </div>
                )
              })
            ) : (
                <div className="empty-list">
                     <p style={{fontSize:'40px'}}> List is Empty</p>
                     <div className="topic">
                        <p style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>Search Topic : </p>
                        <span>
                        <p>fitness</p>
                        <p>smartwatch</p>
                        <p>kettle</p>
                        <p>dryer</p>
                        <p>fan</p>
                        <p>headset</p>
                        <p>sandwich maker</p>
                        </span>
                     </div>
                     
                </div>
            )
          }</>
    )
}

export default List;