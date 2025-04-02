import Image from 'next/image';

import broImage from '../../../../public/assets/images/bro.png';

export default function LeftAuth() {
  return (
    <section className="left-auth shadow-custom-section pt-16 pl-20 bg-[#F0F4FC] rounded-r-[100px] w-[600px] h-full">
      <div className="w-[482px]">
        {/* Header */}
        <header className="pb-16">
          {/* Logo */}
          <h1 className="text-[50px] font-bold w-80 mb-2 leading-[150%]">
            Welcome to <span className="text-[#122D9C]">ELevate</span>
          </h1>

          {/* Description */}
          <p className="text-lg leading-10">
            Quidem autem voluptatibus qui quaerat aspernatur architecto natus
          </p>
        </header>

        {/* Image */}
        <Image width={300} src={broImage} alt="bro"></Image>
      </div>
    </section>
  );
}
