import React from 'react'
import axios from 'axios';
async function getData(){
    try {
        const res = await axios.get("https://example.com/invalid-endpoint")
        return {data:res.data , error:null}
    } catch (error) { 
        let errorMessage = "Có lỗi" 
        if(axios.isAxiosError(error)){
            if(error.response){
                switch (error.response.status) {
                    case 404:
                        errorMessage = '404 - Trang không tồn tại'
                        break;
                    case 500:
                        errorMessage = '500 - Lỗi máy chủ'
                        break;
                    default:
                        errorMessage = `Error : ${error.response.status}`
                        break;
                }
            }else if(error.request){
                errorMessage = "Không phản hồi từ máy chủ"
            }
        }
        return {data:null , error:errorMessage}
    }
}

export default async function AxiosError() {
    const {data:users,error} = await getData();
    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div>
      <h1>Fetching Data trên Server với axios</h1>
    </div>
  )
}
