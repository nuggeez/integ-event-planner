import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AddVendorModal() {
  const [vendorName, setVendorName] = useState("");
  const [vendorType, setVendorType] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  return (
    <dialog id="add_vendor_modal" className="modal">
      <div className="modal-box w-full max-w-3xl">
        <h3 className="text-2xl font-bold mb-6">Add Vendor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Vendor Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Vendor Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Contact Person</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Contact Person Name"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Vendor Type</label>
            <select
              className="select select-bordered w-full"
              value={vendorType}
              onChange={(e) => setVendorType(e.target.value)}
            >
              <option value="" disabled>Select a type</option>
              <option value="Wedding">Wedding</option>
              <option value="School">School</option>
              <option value="Government">Government</option>
              <option value="Corporate">Corporate</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
          <div>
            <label className="label">Contact Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Contact Person Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Contact Number</label>
            <input
              type="tel"
              className="input input-bordered w-full"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-action mt-6">
          <form method="dialog">
            <button className="btn btn-primary flex gap-2 items-center">
              Submit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
