interface LabelProps {
  name?: string;
}

function Label({ name }: LabelProps) {
  return (
    <>
      <div>
        <label>{name}:</label>
        <input className="border" name={name} />
      </div>
    </>
  );
}

function Add() {
  return (
    <>
      <div className="border shadow-lg p-4 mb-4">
        <form>
          <Label name="name" />
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Add;
