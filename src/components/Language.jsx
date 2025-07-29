function Language() {
  return (
    <>
      <ul>
        <label className="language-label">
          <i className="fa-solid fa-language"></i>
          <select>
            <option value="English">English</option>
            <option value="Filipino">Filipino</option>
          </select>
        </label>
      </ul>
    </>
  );
}

export default Language;
