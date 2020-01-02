import React from "react";
import QNAShow from '../pages/QNAShow';
const QNADetail =({match}) => {
 
    console.log(match.params)
    return(
        <div>
            <h3>글상세페이지</h3>
        
           <QNAShow QnA_title={match.params.QnA_title} QnA_id={match.params.QnA_id} />
     
        </div>
    )
    
}
export default QNADetail;