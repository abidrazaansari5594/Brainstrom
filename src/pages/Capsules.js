import { useState, useEffect } from "react"
import { Loading } from "../components"

export default function Capsules() {
  const [capsules, setCapsules] = useState([])
  const [selectedCriteria, setSelectedCriteria] = useState('status');
  const [filteredData, setFilteredData] = useState([]);
  const [dropdownstate, setDropdownState] = useState({ status: false, type: false, originallaunch: false })



  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules")
      const data = await res.json()
      setCapsules(data)
    }

    fetchCapsules()
  }, [])

  const FilterCapsuleStatus = (e) => {
    const filterData = capsules.filter(item => e.target.value == "allstatus" ? item : item.status == e.target.value)
    setFilteredData(filterData)
  }

  
  const SortCapsule_Original_Launch=(e)=>{
    if(e.target.value=="assending"){
      const assending=capsules.sort((a,b)=> new Date(a.original_launch) - new Date(b.original_launch))
      setFilteredData(assending)
      console.log(assending)
    }else{
      const decending = capsules.sort((a,b)=> new Date(a.original_launch) - new Date(b.original_launch))
      setFilteredData(decending)
      console.log(decending)
  }
} 

  const FilterCapsuleType=(e)=>{
    const filterData = capsules.filter(item => e.target.value == "alltype" ? item : item.type == e.target.value)
    setFilteredData(filterData)
  }
  const DropDownHandler = (type) => {
    if (type == "status") {
      setDropdownState({ status: true, type: false, originallaunch: false })
    } else if (type == "type") {
      setDropdownState({ status: false, type: true, originallaunch: false })
    } else if (type == "originallaunch") {
      setDropdownState({ status: false, type: false, originallaunch: true })
    } else {
      setDropdownState({ status: false, type: false, originallaunch: false })
    }
  }

  return (
    <>
      {!capsules ? (
        <Loading />
      ) : (
        <section className="py-32">
          <h1 className="heading text-center mb-10">Capsules</h1>

          <div className="flex justify-center items-center">
            <div>
              <label htmlFor="capsule" className="text-white ml-4">Capsule Status:</label>
              <select id="capsule" onChange={FilterCapsuleStatus}>
                <option value="allstatus">All Status</option>
                <option value="active">Active</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div>
              <label htmlFor="capsule" className="text-white ml-4">Capsule Types:</label>
              <select id="capsule" onChange={FilterCapsuleType}>
              <option value="alltype">All Type</option>
                {[...new Set(capsules.map(item=>item.type))].map(data=>
                <option key={data} value={data}>{data}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="originallaunch" className="text-white ml-4">Original Launch:</label>
              <select id="originallaunch" onChange={SortCapsule_Original_Launch}>
                <option value="assending">Assending</option>
                <option value="decending">Decending</option>
              </select>
            </div>

          </div>

          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {filteredData.length == 0 ? <>
              {capsules.map(
                ({
                  id,
                  type,
                  status,
                  serial,
                  launches,
                  last_update,
                  land_landings,
                  water_landings,
                  reuse_count,
                }) => (
                  <article key={id} className="articles">
                    <h2 className="text-xl font-bold mb-5">
                      {type},{" "}
                      <span className="text-base opacity-75 font-light">
                        {serial}
                      </span>
                    </h2>
                    <ul>
                      <li className="mb-1">{launches.length} launches</li>
                      <li className="mb-1">{land_landings} land landings</li>
                      <li className="mb-1">{water_landings} water landings</li>
                      <li className="mb-1">Reused {reuse_count} times</li>
                      {status === "active" ? (
                        <li className="text-emerald-500">Active</li>
                      ) : (
                        <li className="text-rose-500">Retired</li>
                      )}
                    </ul>

                    <p className="mt-5 opacity-75">{last_update}</p>
                  </article>
                )
              )}
            </> : <>
              {filteredData.map(
                ({
                  id,
                  type,
                  status,
                  serial,
                  launches,
                  last_update,
                  land_landings,
                  water_landings,
                  reuse_count,
                }) => (
                  <article key={id} className="articles">
                    <h2 className="text-xl font-bold mb-5">
                      {type},{" "}
                      <span className="text-base opacity-75 font-light">
                        {serial}
                      </span>
                    </h2>
                    <ul>
                      <li className="mb-1">{launches.length} launches</li>
                      <li className="mb-1">{land_landings} land landings</li>
                      <li className="mb-1">{water_landings} water landings</li>
                      <li className="mb-1">Reused {reuse_count} times</li>
                      {status === "active" ? (
                        <li className="text-emerald-500">Active</li>
                      ) : (
                        <li className="text-rose-500">Retired</li>
                      )}
                    </ul>

                    <p className="mt-5 opacity-75">{last_update}</p>
                  </article>
                )
              )}
            </>}
          </div>
        </section>
      )}
    </>
  )
}
