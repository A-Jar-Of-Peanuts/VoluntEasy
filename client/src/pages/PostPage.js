

export default function PostPage() {
  const{id} = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/post' + id).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      })
    })
  }, []);

  if(!postInfo) return '';

  return(
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <h4>{postInfo.location}</h4>
      <p>`Event time: ${postInfo.time}`</p>
      <p>{postInfo.location}</p>
    </div>
  ) 
}
