import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="group border p-4 w-40">
  Hover me
  <p className="hidden group-hover:block border">
    Hello 👋
  </p>
</div>
<button className="group flex items-center gap-2">
  Save
  <span className="group-hover:text-red-500">a</span>
</button>

    </div>
  )
}

export default Contact
