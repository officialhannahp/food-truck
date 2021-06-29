import React from 'react'

const TruckForm = props => {
    const { submitHandler, truck, changeHandler, action, DeleteButton } = props;


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" className="col-sm-8 form-control" onChange={changeHandler} value={truck.name} />
            </div>

            <div>
                <label htmlFor="style" className="col-sm-4">Style: </label>
                <input type="text" name="style" className="col-sm-8 form-control" onChange={changeHandler} value={truck.style} />
            </div>

            <div>
                <label htmlFor="desc" className="col-sm-4">Description: </label>
                <textarea name="desc" rows="4" className="col-sm-8 form-control" onChange={changeHandler} value={truck.desc} />
            </div>
            <div>
                {
                    DeleteButton ?
                    <DeleteButton />
                    :
                    ''
                }
                <input type="button" value="Cancel" />
                <input type="submit" value={action} />
            </div>
        </form>
    )
}

export default TruckForm
