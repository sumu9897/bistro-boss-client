
const SectionTitle = ({heading , subHeading}) => {
  return (
    <div className="mx-auto text-center md:w-1/3 my-8">
      <p className="text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  )
}

export default SectionTitle
