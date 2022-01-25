const Table = (props) => {
    return (
        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr class="h-8">
                                <th scope="col" class="text-left w-auto">No.</th>
                                <th scope="col" class="text-left hidden md:table-cell">Name</th>
                                <th scope="col" class="text-left">Statecode</th>
                                <th scope="col" class="text-left">Batch</th>
                                <th scope="col" class="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Contact</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Status</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td> 1</td>
                            <td>{props.name}</td>
                            <td>{props.statecode}</td>
                            <td>{props.}</td>
                            <td>{'Member'}</td>
                            <td>{val.lga}</td>
                            <td>{val.ppa}</td>
                            <td>{val.phone}</td>
                            <td>{"Active"} </td>
                        </tr>
                    
                    </tbody>
                </table>
    );
}

export default Table