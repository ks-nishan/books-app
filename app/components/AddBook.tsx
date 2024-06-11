import { BiBookAdd } from 'react-icons/bi'

function AddBook() {
  return (
    <button className='btn btn-primary w-full'>Add new book<BiBookAdd className='ml-1' size={20}/></button>
  )
}

export default AddBook