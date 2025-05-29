import { StaffText } from '@/components';
import { SchoolCalendar } from '@/components';

export default function Staff() {
  return (
    <>
      <div>
        <StaffText />
      </div>
      <div className="mt-10">
        <SchoolCalendar />
      </div>
    </>
  );
}
