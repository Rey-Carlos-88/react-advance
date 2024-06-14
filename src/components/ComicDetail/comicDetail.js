import React, { useEffect, useState } from 'react';
import { useHistory, redirect, redirectDocument, useNavigate } from 'react-router-dom'

export const ComicDetail = ( { dataDetail = {} }) => {


    //console.log('data en hijo => ',dataDetail)

    const [detailData, setDataDetail] = useState()

    useEffect(() => {
        setDataDetail(dataDetail)
    },[])

    console.log('hijo hijo => ',detailData)

    return(
        <>
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum luctus libero, porttitor mollis eros malesuada vitae. Vestibulum sagittis turpis ac placerat tempus. Praesent sollicitudin tellus eu velit bibendum tempor. Aenean lobortis mauris in quam iaculis, sit amet ultricies lacus commodo. Aliquam ac libero tincidunt, mollis leo id, dignissim metus. Suspendisse potenti. Cras aliquet, neque a mollis elementum, nibh nibh feugiat nunc, vel sollicitudin metus tellus vitae ante. Vivamus massa arcu, vestibulum at urna a, imperdiet cursus risus. Nam quis venenatis felis, ac consectetur quam. In sagittis libero vitae est laoreet interdum. Integer vitae eros dui. Duis hendrerit dui aliquam efficitur efficitur.
            </p>
            <div>
                {/* data de padre {props.dataDetail} */}
            </div>

        </>
    )


}

export default ComicDetail;
