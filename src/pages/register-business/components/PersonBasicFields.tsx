import { PersonParticulars } from "../types/cacTypes";

interface Props {
  person: PersonParticulars;
  onChange: (field: keyof PersonParticulars, val: any) => void;
  showCountryOfResidence?: boolean;
}

export default function PersonBasicFields({
  person,
  onChange,
  showCountryOfResidence = false,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Full Legal Name <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={person.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Firstname Middlename Surname"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Date of Birth <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="date"
            required
            value={person.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Nationality <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={person.nationality}
            onChange={(e) => onChange("nationality", e.target.value)}
            placeholder="e.g. Nigerian"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Residential Address (Include House No. & LGA) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={person.residentialAddress}
            onChange={(e) => onChange("residentialAddress", e.target.value)}
            placeholder="House No, Street, Town, LGA, State"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Occupation <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={person.occupation}
            onChange={(e) => onChange("occupation", e.target.value)}
            placeholder="e.g. Businessman, Engineer, Lawyer"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Email Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="email"
            required
            value={person.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="personal@email.com"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Phone Number {showCountryOfResidence && "(Include country code)"} <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="tel"
            required
            value={person.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+234..."
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>
    </div>
  );
}
