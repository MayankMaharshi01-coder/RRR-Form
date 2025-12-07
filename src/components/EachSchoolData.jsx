export default function EachSchoolData({ name, products, helpedStudents, bg , img }) {
  let Image1 = '/images/1st Position.png'  
  let Image2 = '/images/2nd Position.png' 
  let Image3 = '/images/3rd Position.png'

   let imgphoto;
  if(img === 'first'){
  imgphoto = Image1
  } else if(img === 'second'){
  imgphoto = Image2
  }else if(img === 'third'){
  imgphoto = Image3
   }
    
    return (
        <>
            <div className={`flex  sm:flex-row sm:items-center justify-between 
     w-full  shadow-sm hover:shadow-md border border-gray-100 
     rounded-xl p-4 mb-3 transition-all duration-200 cursor-pointer gap-4 ` + bg}>
   
    <div className="w-1/3">
              <img src={imgphoto}/>

        <p className="text-base sm:text-lg font-semibold text-gray-500">
                {name}
        </p>
    </div>

          <div className="w-1/3 text-center">
                <p className="text-sm sm:text-md font-semibold text-blue-600">{products}</p>
                <p className="text-xs sm:text-sm text-gray-500">Products</p>
            </div>
<div className="w-1/3 text-center">
                <p className="text-sm sm:text-md font-semibold text-green-600">{helpedStudents}</p>
                <p className="text-xs sm:text-sm text-gray-500">Students</p>
            </div>
  </div>


        </>
    )
}