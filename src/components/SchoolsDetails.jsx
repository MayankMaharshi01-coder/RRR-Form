import EachSchoolData from "../components/EachSchoolData";
const Topper = "/imges/1st Position.png"

const schoolsData = [
  {
    id: 1,
    name: "Rajkiye Uchh Vidyalay Phoolasar",
    products: 120,
    helpedStudents: 350
  },
  {
    id: 2,
    name: "Govt Sr. Sec. School Nagaur",
    products: 80,
    helpedStudents: 200
  },
  {
    id: 3,
    name: "Girls Sr. Sec. School Jodhpur",
    products: 145,
    helpedStudents: 430
  },
  {
    id: 4,
    name: "Primary School Khejarli",
    products: 60,
    helpedStudents: 150
  },
  {
    id: 5,
    name: "Adarsh Vidya Mandir Bikaner",
    products: 95,
    helpedStudents: 280
  },
  {
    id: 6,
    name: "Govt. Model School Didwana",
    products: 110,
    helpedStudents: 320
  },
  {
    id: 7,
    name: "Kendriya Vidyalaya Barmer",
    products: 170,
    helpedStudents: 500
  },
  {
    id: 8,
    name: "Jawahar Navodaya School Churu",
    products: 130,
    helpedStudents: 390
  },
  {
    id: 9,
    name: "Rajkiye Prathmik School Merta",
    products: 55,
    helpedStudents: 125
  },
  {
    id: 10,
    name: "Govt High School Osian",
    products: 152,
    helpedStudents: 295
  }
];

export default function SchoolDetail() {
    const sortData = [...schoolsData].sort((x, y) => y.products - x.products)
    
    return (
        <>
         <div>
                {sortData.map(function ({ id, name, products, helpedStudents },index) {
                  
                    let bg = ""
                    let img =''
                    if (index === 0) {
                        bg = 'bg-yellow-400'
                        img = 'first'
                    } else if (index === 1) {
                        bg = 'bg-gray-300'
                        img = 'second'
                    } else if (index === 2) {
                        bg = 'bg-amber-500'
                        img = 'third'
                    } else {
                        bg = 'bg-white'
                        img = ""
                    }
                    return (<EachSchoolData
                        key={id}
                        name={name}
                        products={products}
                        helpedStudents={helpedStudents}
                        bg={bg}
                        img={img}
                    />)
                })
            
           } 
         </div>
        </>
    )
}

