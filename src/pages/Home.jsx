import  {useState} from "react";
import Item from "../components/Item";
import HomeVideo from "../components/HomeVideo";
import DetailCard from "../components/DetailCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
 
  const dummyData = [
    {
      id: 1,
      imgUrl: "https://image.hm.com/assets/hm/fb/1e/fb1ec5f3e79a3009b91bc9f12dc45156f01ded57.jpg?imwidth=768",
      category: "T-shirt",
      schoolName: "Govt. Sr. Sec. School, Churu",
      description: " It is a awesome product."
    },
    {
       id: 2,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3aK93-MIcwNaodkc66Sdy723OTBN2Epz8g&s",
      category: "T-shirt",
      schoolName: "Bal Mandir Sr. Sec. School, Churu",
      description:" It is a awesome product."
    },
    {
       id: 3,
      imgUrl: "https://img.freepik.com/premium-vector/old-book-white_87946-1711.jpg",
      category: "Book",
      schoolName: "Govt. Sr. Sec. School, Ratangarh",
      description:" It is a awesome product."
    },
    {
        id: 4,
      imgUrl: "https://www.flatspot.com/cdn/shop/products/simple-os-shoes-chocolate-7_1300x1500_crop_center.progressive.jpg?v=1648226050",
      category: "Shoes",
      schoolName: "Bal Mandir Sr. Sec. School, Ratangarh",
      description:" It is a awesome product."
    },
    {
         id: 5,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFor6CDjURiWu8ESSKM_ulurZ5pj602h4pfg&s",
      category: "School Bag",
      schoolName: "Govt. Sr. Sec. School, Sujangarh",
      description:" It is a awesome product."
    },
    {
          id: 6,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v5SbBcLqbOIaX0N7jAwoU9e1RsmtSD7Atg&s",
      category: "Book",
      schoolName: "Bal Mandir Sr. Sec. School, Sujangarh",
      description:" It is a awesome product."
    },
    {
           id: 7,
      imgUrl: "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
      category: "School Bag",
      schoolName: "Govt. Sr. Sec. School, Taranagar",
      description:" It is a awesome product."
    },
    {
            id: 8,
      imgUrl: "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
      category: "School Bag",
      schoolName: "Bal Mandir Sr. Sec. School, Taranagar",
      description:" It is a awesome product."
    },
    {
             id: 9,
      imgUrl: "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
      category: "Shoes",
      schoolName: "Govt. Sr. Sec. School, Bidasar",
      description:" It is a awesome product."
    },
    {
              id: 10,
      imgUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
      category: "Book",
      schoolName: "Adarsh Vidya Mandir, Bidasar",
      description:" It is a awesome product."
    },
    {
           id: 11,
      imgUrl: "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
      category: "School Bag",
      schoolName: "Govt. Sr. Sec. School, Sardarshahar",
      description:" It is a awesome product."
    },
    {
            id: 12,
      imgUrl: "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
      category: "School Bag",
      schoolName: "Seth Moti Lal School, Sardarshahar",
      description:" It is a awesome product."
    },
    {
             id: 13,
      imgUrl: "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
      category: "Shoes",
      schoolName: "Govt. Sr. Sec. School, Rajgarh",
      description:" It is a awesome product."
    },
    {
              id: 14,
      imgUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
      category: "Book",
      schoolName: "Tagore Public School, Rajgarh",
      description:" It is a awesome product."
    },
  ]
  

function Home () {
//  const [ search, setSearch ] = useState('');
//   const [ data, setData ] = useState(dummyData);



    const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);
  const [detailCard, setdetailCard] = useState({ imgUrl: "",
  category: "",
  description: "",
  schoolName: "",})
const { contextSafe } = useGSAP()
 const fun = contextSafe(()=>{
      gsap.to(".cardOfDetailProduct",{
        display:"flex",
        opacity:1
      }
    )
    })

gsap.registerPlugin(useGSAP)
 
  function handleInput(event) {
    
    const newSearch = event.target.value
    
    setSearch(newSearch)

    let newdata = dummyData.filter(function ({ category }) {
     return (
         category.toLowerCase().indexOf(newSearch.toLowerCase()) != -1
      )

    })

    setData(newdata)
   }

   const handleClick = (e) => {
    
    const detailsArr = e.target.id.split("&/&/&")
    let itemDetails = {
      imgUrl: detailsArr[0],
      description: detailsArr[1],
    };
    dummyData.forEach((item)=>{
      if(item.imgUrl===itemDetails.imgUrl &&  item.description===itemDetails.description){
        setdetailCard(item);
     console.log(detailCard ,item)
      }           
    });
    
   fun()
  }

    return (
      <>
         <div className="bg-[#D9E4DD] text-3xl sm:text-4xl md:text-5xl">
         <HomeVideo />
        <div className="flex flex-col w-full bg-[#f0f8ef] mt-10 p-4 rounded-t-3xl">
          <div className="relative flex items-center">
            <span className="text-gray-300 absolute left-280 text-3xl ">
             
            </span>
            <input
              className="bg-white w-full sm:w-80 md:w-96 lg:w-[500px] mx-auto text-3xl p-6 h-15 m-10 border-solid border-2 border-gray-300 rounded-xl  "
              value={search}
              placeholder="Search..."
              onInput={handleInput}
            />
          </div>
          <h2 className="text-center text-6xl font-bold text-green-800 mb-8 font-serif">
            Available Products
          </h2>
          <div className="flex flex-wrap gap-5 justify-center px-4">
            {data.map(function ({
              category,
              imgUrl,
              description,
              schoolName,
              id,
            }) {
              return (
                <Item
                  category={category}
                  imgUrl={imgUrl}
                  description={description}
                  schoolName={schoolName}
                  key={id}
                  id={id}
                  goodsData={dummyData}
                 
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
      <DetailCard  detailCard={{
        imgUrl: detailCard.imgUrl,
        category: detailCard.category,
        description: detailCard.description,
        schoolName: detailCard.schoolName,
      }} />
    </>




      // <>
      //   <HomeVideo />

      //   <div className="bg-green-100 flex">
      //     <div className="flex flex-col">
      //       <input className="bg-[#679b64] placeholder-green-100 text-white self-centerw-full sm:w-80 md:w-96 lg:w-[500px] mx-auto text-3xl p-2 h-15 m-10  border-solid border-2 border-green-900 rounded"  value={search} placeholder='Search' onInput={handleInput}/>
      //        <div className="flex flex-wrap gap-5 justify-center px-4">
      //       {data.map(function ({
      //         category,
      //         imgUrl,
      //         description,
      //         schoolName,
      //         id,
      //       }) {
      //         return (
      //           <Item
      //             category={category}
      //             imgUrl={imgUrl}
      //             description={description}
      //             schoolName={schoolName}
      //             key={id}
      //             id={id}
      //             goodsData={dummyData}
                 
      //             handleClick={handleClick}
      //           />
      //         );
      //       })}
      //     </div>
      //     </div>
      //  </div>
      //   </>
    )
}

export default Home;