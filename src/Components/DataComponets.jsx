export default function DataComponents(){
    const date = new Date();
    const monthsName = ['January',
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'Novembre', 
        'Decembre'];

        const month = monthsName[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    return(
        <>
        <span>{`${year}, ${month} ${day}`}</span>
        </>
    )
}