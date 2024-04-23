const apiRequest =async(url='',optionObj=null,erMsg=null)=>{
    try {
        const response = await fetch(url,optionObj);
        if(!response.ok) throw Error("Please reload the app")
        
    } catch (error) {
        erMsg=error.Message
        
    }finally{
        return erMsg
    }
}

export default apiRequest