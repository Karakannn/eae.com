import logo from '@assets/images/eae-elektrik-logo.jpg';
import ContactInfo from '../../UI/ContactInfo/ContactInfo';
import Icon from '../../UI/Icon/Icon';
import LinkColumn from '../../UI/LinkColumn/LinkColumn';
import './Footer.scss';
import Button from '@components//UI/Button/Button';

export default function Footer() {

  const footerLinksColumn = [
    {
      title: 'Site Haritasi',
      columns: [
        { name: 'Anasayfa', link: '#' },
        { name: 'Hakkımızda', link: '#' },
        { name: 'Formlar ve Anketler', link: '#' },
        { name: 'Sertifikalar', link: '#' },
        { name: 'İletişim', link: '#' },
      ]
    },
    {
      title: 'Hakkimizda',
      columns: [
        { name: 'Biz Kimiz', link: '#' },
        { name: 'Misyon', link: '#' },
        { name: 'Vizyon', link: '#' },
      ]
    },
    {
      title: 'Formlar ve Anketler',
      columns: [
        { name: 'Formlar', link: '#' },
        { name: 'Anketler', link: '#' }
      ]
    }
  ]

  const contactInformations = [
    { label: 'Adres :', description: "Gebze IV İstanbul Makine ve Sanayicileri Organize Bölgesi, 6. Cadde, No: 6 41455, Demirciler Köyü, Dilovası/Kocaeli" },
    { label: 'Telefon :', description: '(90) 212 866 20 00 / 6137' },
    { label: 'Telefon 2 :', description: '(90) 212 866 20 00 / 6138' },
    { label: 'Fax :', description: '(90) 212 886 24 20' },
    { label: 'Email :', description: 'elabkal@eaegroup.com' },
  ]

  const socialIcons = [
    { iconId: 'Facebook', link: '#' },
    { iconId: 'LinkedIn', link: '#' },
    { iconId: 'Instagram', link: '#' },
    { iconId: 'Youtube', link: '#' },
  ]

  return (
    <footer className='flex flex-col bg-gray-700'>
      <div className='page-vertical-padding'>
        <div className="container mx-auto">

          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-1">
              <div className="flex flex-col gap-6 items-start">
                <img src={logo} className="h-16 w-auto" alt="footer logo" />
                <div className="flex flex-col gap-3">
                  {contactInformations.map((contactInfo) => <ContactInfo {...contactInfo} />)}
                </div>
              </div>

            </div>

            <div className="col-span-2">
              <div className="flex">
                {footerLinksColumn.map((linkColumn, index) =>
                  <div className="flex-1">
                    <LinkColumn key={index} {...linkColumn} />
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className="flex flex-col pt-8 gap-3">
            <h5 className='text-md font-semibold text-white'>E-Lab © adına tüm hakları saklıdır.</h5>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <Button class='custom-btn-md btn-standard-link'>Gizlilik Politikası</Button>
              </div>

              <div className="col-span-1">
                <div className="flex justify-end items-center gap-4">
                  {socialIcons.map((icon) => <Icon class='w-6 h-6 fill-gray-400 hover:fill-white hover:cursor-pointer transition-colors' id={icon.iconId} />)}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
