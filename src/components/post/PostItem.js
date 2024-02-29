import 'bootstrap/dist/css/bootstrap.min.css';

function PostItem({index=0, title = 'Unknown', description = 'Unknown', path="unknown", tags = []}) {
  const tagNum = tags.length;

  return (
    <div style={{width: '100%'}}>
      <div className="d-flex flex-column justify-content-between my-4 mx-5" style={{position: 'relative', backgroundColor: 'rgba(52, 52, 52, 0.8)', minHeight: '250px'}}>
        <div style={{borderLeft: '5px #999999 solid', padding: '2rem 0 1rem 5%'}}>
          <a href={`/article?postid=${index}`}><h2 style={{color: "#cfcfcf"}}>{title}</h2></a>
        </div>
        <div className='d-flex flex-column' style={{width: '80%', padding: '0 5% 1rem 5%', fontSize: '18px', fontWeight: "bold"}}>
          <div>{description}</div>
        </div>
        <hr style={{margin: "0 5%"}}></hr>
        <div style={{width: '80%', padding: '1rem 5% 2rem 5%'}}>
          <span>tags: </span>
          <>
          {
            tags.map((tag, index) => {
              return <span>{tag}{index !== (tagNum - 1) ? ", ": ""}</span>
            })
          }
          </>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
