import axios from 'axios';
import toast from 'react-hot-toast';

const Searchbar = ({data, setData , setNewdata})=>{
    const handleChange = async (e) => {
        e.preventDefault();
        if(data[0]){
          var res = await axios.post("http://192.168.1.4:8000/search", { search: data })
          console.log(res.data);
          setNewdata(res.data);
        }else{
          toast.error('Query is Empty')
        }
        if (res.data[0]) {
          toast.success('Data fetched')
        }
        else {
          toast.error("Not found")
        }
        setData("")
      }
    return(
        <>

        <form className="input" onSubmit={(e) => handleChange(e)}>
          <input value={data} onChange={(e) => setData(e.target.value)} type="text" placeholder="Search..." className="input_box">
          </input>
          <button className="input_submit" type="submit">Go</button>
        </form>
     
            </>
    )
}

export default Searchbar