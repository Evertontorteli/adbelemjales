import svgPaths from "./svg-cuvo98uzqz";
import imgWhatsAppImage20220623At16221 from "figma:asset/7680987dd5c00a33464b03c029afb0a773ceaad8.png";
import imgVector from "figma:asset/ced135a2e408f0118777b4699f067e032dbe27fe.png";
import imgPixQrcode1 from "figma:asset/f67f7a25f56fe3b7098344ba3a0c74cada03c4df.png";

function SigaNos() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Bold',sans-serif] gap-[5px] h-[168px] items-center leading-[normal] not-italic relative shrink-0 text-[#333333] text-[60px] text-center w-[1221px]" data-name="Siga Nos">
      <p className="h-[66px] relative shrink-0 w-[1221px]">SIGA NOS !</p>
      <p className="h-[65px] relative shrink-0 w-[1221px]">Nas nossas redes sociais</p>
    </div>
  );
}

function InstagramFacebook() {
  return (
    <div className="content-stretch flex items-start justify-center px-[140px] py-0 relative shrink-0 w-[1221px]" data-name="Instagram, Facebook">
      <p className="font-['Poppins:Bold',sans-serif] h-[44px] leading-[normal] not-italic relative shrink-0 text-[#71d3cf] text-[40px] w-[1221px]">INSTAGRAM, FACEBOOK</p>
    </div>
  );
}

function AkarIconsFacebookFill() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="akar-icons:facebook-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_1_207)" id="akar-icons:facebook-fill">
          <path clipRule="evenodd" d={svgPaths.p2e7e5080} fill="var(--fill-0, #206BA3)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_207">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EntypoSocialInstagramWithCircle() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="entypo-social:instagram-with-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_1_181)" id="entypo-social:instagram-with-circle">
          <path d={svgPaths.p1afd3500} fill="var(--fill-0, #206BA3)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_181">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Adbelemjales() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="@adbelemjales">
      <AkarIconsFacebookFill />
      <EntypoSocialInstagramWithCircle />
    </div>
  );
}

function Adbelemjales1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="@adbelemjales">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#737479] text-[35px] text-right w-[256px]">@adbelemjales</p>
    </div>
  );
}

function RedesSociais() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-[425px]" data-name="Redes Sociais">
      <Adbelemjales />
      <Adbelemjales1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[426px]">
      <RedesSociais />
    </div>
  );
}

function RedesSociais1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[380px]" data-name="Redes Sociais">
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[42px] relative shrink-0 w-[382px]">
      <RedesSociais1 />
    </div>
  );
}

function RedesSociais2() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] h-[175px] items-start relative shrink-0 w-[751px]" data-name="Redes Sociais">
      <InstagramFacebook />
      <Frame4 />
    </div>
  );
}

function InstagramFacebook1() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-end relative shrink-0 w-[955px]" data-name="Instagram, Facebook">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#71d3cf] text-[40px] text-nowrap text-right whitespace-pre">GRUPO WHATSAPP</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex h-[140px] items-start left-0 top-0 w-[955px]">
      <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal h-[84px] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#737479] text-[35px] text-right w-[955px]">Fique por dentro de todos os eventos, assuntos e comunicados.</p>
    </div>
  );
}

function IconWhtasApp() {
  return (
    <div className="absolute bottom-[-20%] content-stretch flex flex-col items-center justify-center left-[calc(50%+610.5px)] top-[-59.29%] translate-x-[-50%] w-[266px]" data-name="Icon WhtasApp">
      <div className="h-[100px] relative shrink-0 w-[100.276px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 100">
          <path d={svgPaths.p2319400} fill="var(--fill-0, #206BA3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[140px] relative shrink-0 w-[955px]">
      <Frame6 />
      <IconWhtasApp />
    </div>
  );
}

function Agenda() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[955px]" data-name="Agenda">
      <Frame7 />
    </div>
  );
}

function Agenda1() {
  return (
    <div className="h-[168px] relative shrink-0 w-[955px]" data-name="Agenda">
      <Agenda />
    </div>
  );
}

function Pix() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="PIX">
      <div className="[grid-area:1_/_1] ml-[46px] mt-[45px] relative size-[302px]" data-name="WhatsApp Image 2022-06-23 at 16.22 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[529.8%] left-[-72.19%] max-w-none top-[-215.56%] w-[244.37%]" src={imgWhatsAppImage20220623At16221} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[489px] ml-0 mt-0 relative w-[394px]" data-name="FrameBody">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 489">
          <path d={svgPaths.pb968980} fill="var(--fill-0, #333333)" id="FrameBody" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Poppins:ExtraBold',sans-serif] leading-[normal] ml-[197.5px] mt-[406px] not-italic relative text-[40px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">WhatsApp</p>
    </div>
  );
}

function GrupoWhatsApp() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-center leading-[0] relative shrink-0 w-[1221px]" data-name="Grupo WhatsApp">
      <div className="font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#206ba3] text-[40px] text-center w-[1216px]">
        <p className="mb-0">ENTRE NO NOSSO GRUPO DE WHATSAPP</p>
        <p>SCANEANDO O QR CODE</p>
      </div>
      <Pix />
    </div>
  );
}

function GrupoWhatsApp1() {
  return (
    <div className="content-stretch flex flex-col gap-[130px] h-[1147px] items-start relative shrink-0 w-[1221px]" data-name="Grupo WhatsApp">
      <InstagramFacebook1 />
      <Agenda1 />
      <GrupoWhatsApp />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[100px] items-center left-[78px] top-[135px] w-[1221px]">
      <SigaNos />
      <RedesSociais2 />
      <GrupoWhatsApp1 />
    </div>
  );
}

function SigaNos1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[1221px]" data-name="Siga Nos">
      <p className="font-['Poppins:Bold',sans-serif] h-[66px] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[60px] text-center w-[1221px]">PROGRAMAÇÃO</p>
    </div>
  );
}

function BookSvgrepoCom2() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="book-svgrepo-com 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_1_196)" id="book-svgrepo-com 3">
          <path d={svgPaths.p2bd5f000} fill="var(--fill-0, #206BA3)" id="Vector" />
          <path d={svgPaths.p2f306f00} fill="var(--fill-0, #273B7A)" id="Vector_2" />
          <g clipPath="url(#clip1_1_196)" id="church-svgrepo-com 1">
            <path d={svgPaths.p38030c00} fill="var(--fill-0, #BCBEC0)" id="Vector_3" />
            <path d={svgPaths.pf15e200} fill="var(--fill-0, #FFD983)" id="Vector_4" />
            <path d={svgPaths.p26727800} fill="var(--fill-0, #662113)" id="Vector_5" />
            <path d={svgPaths.p23718072} fill="var(--fill-0, #FFD983)" id="Vector_6" />
            <path d={svgPaths.pb4f4a00} fill="var(--fill-0, #DD2E44)" id="Vector_7" />
            <path d={svgPaths.p28f44b00} fill="var(--fill-0, #662113)" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_196">
            <rect fill="white" height="150" width="150" />
          </clipPath>
          <clipPath id="clip1_1_196">
            <rect fill="white" height="100" transform="translate(25 25)" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AzureRadiance() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-name="Azure Radiance">
      <BookSvgrepoCom2 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#201f35] text-[35px] text-nowrap whitespace-pre">Quarta Feira</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#555555] text-[25px] text-nowrap uppercase whitespace-pre">HorÁrio: 20:00h</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <AzureRadiance />
    </div>
  );
}

function BookSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="book-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_1_163)" id="book-svgrepo-com 1">
          <path d={svgPaths.p2bd5f000} fill="var(--fill-0, #206BA3)" id="Vector" />
          <path d={svgPaths.p220d2d80} fill="var(--fill-0, #273B7A)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.pebef280} fill="var(--fill-0, #FFC61B)" id="Vector_3" />
            <path d={svgPaths.p18725000} fill="var(--fill-0, #FFC61B)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3156c000} fill="var(--fill-0, #E2A610)" id="Vector_5" />
          <path d={svgPaths.p27276e00} fill="var(--fill-0, #FEE187)" id="Vector_6" />
          <path d={svgPaths.p97afc00} fill="var(--fill-0, #FFEDB5)" id="Vector_7" />
          <path d={svgPaths.p19107f00} fill="var(--fill-0, #FEE187)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_163">
            <rect fill="white" height="150" width="150" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SteelBlue() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-name="Steel Blue">
      <BookSvgrepoCom />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[35px] text-nowrap whitespace-pre">Escola Biblica Dominical</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#555555] text-[25px] text-nowrap uppercase whitespace-pre">HorÁrio: 09:00h</p>
    </div>
  );
}

function BookSvgrepoCom1() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="book-svgrepo-com 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_1_196)" id="book-svgrepo-com 3">
          <path d={svgPaths.p2bd5f000} fill="var(--fill-0, #206BA3)" id="Vector" />
          <path d={svgPaths.p2f306f00} fill="var(--fill-0, #273B7A)" id="Vector_2" />
          <g clipPath="url(#clip1_1_196)" id="church-svgrepo-com 1">
            <path d={svgPaths.p38030c00} fill="var(--fill-0, #BCBEC0)" id="Vector_3" />
            <path d={svgPaths.pf15e200} fill="var(--fill-0, #FFD983)" id="Vector_4" />
            <path d={svgPaths.p26727800} fill="var(--fill-0, #662113)" id="Vector_5" />
            <path d={svgPaths.p23718072} fill="var(--fill-0, #FFD983)" id="Vector_6" />
            <path d={svgPaths.pb4f4a00} fill="var(--fill-0, #DD2E44)" id="Vector_7" />
            <path d={svgPaths.p28f44b00} fill="var(--fill-0, #662113)" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_196">
            <rect fill="white" height="150" width="150" />
          </clipPath>
          <clipPath id="clip1_1_196">
            <rect fill="white" height="100" transform="translate(25 25)" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DimGray() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-name="DimGray">
      <BookSvgrepoCom1 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#201f35] text-[35px] text-nowrap whitespace-pre">Domingo</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#555555] text-[25px] text-nowrap uppercase whitespace-pre">Horário: 18:30h</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[100px] items-center justify-center relative shrink-0 w-[688px]">
      <Frame10 />
      <SteelBlue />
      <DimGray />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[45px] relative rounded-[20px] shrink-0 w-[1217px]">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[42px] items-center left-[78px] top-[2054px]">
      <SigaNos1 />
      <Frame12 />
    </div>
  );
}

function Contribuicao() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center justify-center left-0 not-italic text-center top-0" data-name="Contribuição">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#206ba3] text-[40px] w-[1201px]">TEMPLO CENTRAL</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#333333] text-[0px] w-[1201px]">
        <p className="font-['Poppins:Medium',sans-serif] mb-0 not-italic text-[35px]">AVENIDA FRANCISCO JALLES, N°3575 - VILA MARIA</p>
        <p className="text-[30px]">(AO LADO DO HOSPITAL DE AMOR)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[164px] left-[88px] top-[2604px] w-[1201px]">
      <Contribuicao />
    </div>
  );
}

function AntCapa() {
  return (
    <div className="absolute bg-white h-[2906px] left-0 overflow-clip top-0 w-[1377px]" data-name="Ant Capa">
      <Frame5 />
      <Frame13 />
      <Frame3 />
    </div>
  );
}

function CamadaX2() {
  return (
    <div className="absolute bottom-[63.32%] left-[42.97%] right-[43.84%] top-0" data-name="Camada_x0020_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Camada_x0020_1">
          <path d={svgPaths.p46b8840} id="Vector" stroke="var(--stroke-0, #373435)" strokeMiterlimit="22.9256" strokeWidth="0.0762" />
          <path d={svgPaths.p35076280} fill="url(#paint0_linear_1_174)" id="Vector_2" />
          <g id="_1866541660560">
            <path clipRule="evenodd" d={svgPaths.p1775cb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p4837400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_174" x1="0" x2="139.759" y1="69.8796" y2="69.8796">
            <stop stopColor="#8B7355" />
            <stop offset="1" stopColor="#5C4033" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[381px] relative shrink-0 w-[1059px]" data-name="Logo">
      <div className="absolute h-[147.45px] left-0 top-[157px] w-[1050.37px]" data-name="AD BELÉM JALES">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1051 148">
          <g id="AD BELÃM JALES">
            <path d={svgPaths.p304b7c80} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p8170a80} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p38f2ec80} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p341ae700} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p3cf14940} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p35520d80} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p26eb7b80} fill="var(--fill-0, #737479)" />
            <path d={svgPaths.p35290080} fill="#5C4033" />
            <path d={svgPaths.p2835e770} fill="#5C4033" />
            <path d={svgPaths.p28724580} fill="#5C4033" />
            <path d={svgPaths.p222b9c20} fill="#5C4033" />
            <path d={svgPaths.pf2e6e00} fill="#5C4033" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[227px] not-italic text-[#737479] text-[40px] text-nowrap top-[321px] whitespace-pre">LUGAR DE CURA E RECOMEÇOS</p>
      <CamadaX2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[161px] top-[135px]">
      <Logo />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[26.75%_18.32%_39.47%_13.19%]" data-name="_1866541660560">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 946 982">
        <g id="_1866541660560">
          <path clipRule="evenodd" d={svgPaths.p312c9e00} fill="var(--fill-0, white)" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pe4e2300} fill="var(--fill-0, white)" fillOpacity="0.35" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CamadaX() {
  return (
    <div className="absolute contents inset-[24.85%_4.13%_31.59%_4.2%]" data-name="Camada_x0020_1">
      <div className="absolute inset-[54.58%_61.2%_45.23%_33.22%]" data-name="Vector">
        <div className="absolute bottom-[-0.69%] left-0 right-0 top-[-0.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 6">
            <path d={svgPaths.p37c2e0b0} id="Vector" stroke="var(--stroke-0, #373435)" strokeMiterlimit="22.9256" strokeWidth="0.0762" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.85%_4.13%_31.59%_4.2%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="1266" src={imgVector} width="1266" />
      </div>
      <Component />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute h-[2906px] left-[2715px] overflow-clip top-0 w-[1381px]" data-name="Capa">
      <Frame1 />
      <CamadaX />
    </div>
  );
}

function CamadaX1() {
  return (
    <div className="absolute bottom-[63.32%] left-[42.97%] right-[43.84%] top-0" data-name="Camada_x0020_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Camada_x0020_1">
          <path d={svgPaths.p46b8840} id="Vector" stroke="var(--stroke-0, #373435)" strokeMiterlimit="22.9256" strokeWidth="0.0762" />
          <path d={svgPaths.p35076280} fill="url(#paint0_linear_1_174)" id="Vector_2" />
          <g id="_1866541660560">
            <path clipRule="evenodd" d={svgPaths.p1775cb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p4837400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_174" x1="0" x2="139.759" y1="69.8796" y2="69.8796">
            <stop stopColor="#8B7355" />
            <stop offset="1" stopColor="#5C4033" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute h-[381px] left-0 top-0 w-[1059px]" data-name="Logo">
      <div className="absolute h-[147.45px] left-0 top-[157px] w-[1050.37px]" data-name="AD BELÉM JALES">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1051 148">
          <g id="AD BELÃM JALES">
            <path d={svgPaths.p304b7c80} fill="white" />
            <path d={svgPaths.p8170a80} fill="white" />
            <path d={svgPaths.p38f2ec80} fill="white" />
            <path d={svgPaths.p341ae700} fill="white" />
            <path d={svgPaths.p3cf14940} fill="white" />
            <path d={svgPaths.p35520d80} fill="white" />
            <path d={svgPaths.p26eb7b80} fill="white" />
            <path d={svgPaths.p35290080} fill="#5C4033" />
            <path d={svgPaths.p2835e770} fill="#5C4033" />
            <path d={svgPaths.p28724580} fill="#5C4033" />
            <path d={svgPaths.p222b9c20} fill="#5C4033" />
            <path d={svgPaths.pf2e6e00} fill="#5C4033" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[227px] not-italic text-[40px] text-nowrap text-white top-[321px] whitespace-pre">LUGAR DE CURA E RECOMEÇOS</p>
      <CamadaX1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[381px] relative shrink-0 w-[1059px]">
      <Logo1 />
    </div>
  );
}

function Contribuicao1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-0 not-italic top-0" data-name="Contribuição">
      <p className="font-['Poppins:ExtraBold',sans-serif] h-[44px] leading-[normal] relative shrink-0 text-[#206ba3] text-[40px] w-[1201px]">CONTRIBUA COM ESSA OBRA</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#333333] text-[35px] w-[1201px]">
        <span>{`"Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes." `}</span>
        <span className="font-['Poppins:Bold',sans-serif] not-italic">Malaquias 3:10</span>
      </p>
    </div>
  );
}

function Pix1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="PIX">
      <div className="[grid-area:1_/_1] ml-[26.9px] mt-[26.9px] relative size-[670.345px]" data-name="PIX QRCODE 1">
        <img alt="" className="block max-w-none size-full" height="670.345" src={imgPixQrcode1} width="670.345" />
      </div>
      <div className="[grid-area:1_/_1] h-[900px] ml-0 mt-0 relative w-[724.138px]" data-name="FrameBody">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 725 900">
          <path d={svgPaths.pb498f00} fill="var(--fill-0, #333333)" id="FrameBody" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[58.345px] ml-[59.43px] mt-[766.19px] relative w-[607.709px]" data-name="PIX: 53.218.798/0001-09">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 608 59">
          <g id="PIX: 53.218.798/0001-09">
            <path d={svgPaths.p2c3f400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4a87c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4c88800} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd44b100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bcb1b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2924f300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p332f6000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22717e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb8f4680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20895a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p185ff700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39a400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3af3eb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2bc65000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1312ff80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31696600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p34c9e550} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e558880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p5f39c70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3379c980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c469300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33c22d40} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[66px] items-center leading-[0] left-0 top-[721px] w-[1201px]">
      <div className="font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#206ba3] text-[40px] text-center w-[1201px]">
        <p className="mb-0">ENTRE NO APP DO SEU BANCO</p>
        <p>E SCANEIE O QR CODE</p>
      </div>
      <Pix1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[1807px] relative shrink-0 w-[1201px]">
      <Contribuicao1 />
      <Frame8 />
    </div>
  );
}

function ConteudoContraCapa() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[226px] items-center left-[68px] top-[135px]" data-name="Conteudo Contra Capa">
      <Frame15 />
      <Frame2 />
    </div>
  );
}

function AtrasCapa() {
  return (
    <div className="absolute bg-[#e7e9e6] h-[2906px] left-[1380px] overflow-clip top-0 w-[1337px]" data-name="Atras Capa">
      <ConteudoContraCapa />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[54px] items-start left-[2843px] top-[2189px] w-[1127px]">
      <div className="bg-[#8B7355] h-[503px] shrink-0 w-[16px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[503px] justify-center leading-[normal] not-italic relative shrink-0 text-[#737479] text-[60px] w-[1057px]">
        <p className="mb-0">Se você deseja fazer parte dessa igreja ou ser um voluntário para ajudar em nossos Projetos,</p>
        <p>estaremos esperando por você de coração aberto. Venha fazer parte da nossa Família.</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <AntCapa />
      <Capa />
      <AtrasCapa />
      <Frame14 />
    </div>
  );
}