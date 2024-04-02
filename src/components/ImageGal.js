import React, { useEffect, useState } from "react";

const ImageGal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://picsum.photos/v2/list').then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
    // getApi();
  });

//   const getApi = async () => {
//     try {
//         const response = await fetch('https://picsum.photos/v2/list');
//         const data = await response.json();
//         setData(data);
//     }catch(error){
//         console.error("error fetching : ",error);
//     }
// }
  return (
    <div className="p-4">
      <h1 className="text-center font-bold font-serif uppercase text-3xl">Image Gallery</h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.download_url}
                alt={`image_${item.id}`}
                className="w-full"
                height="400"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGal;
