import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Button } from "@components/Utils/Button";
import { useRouter } from "next/router";

const PrivacyPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout title="Gizlilik Politikası">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Gizlilik Politikası
            </p>
            <div className="text-left text-gray-700">
              <p>
                Son güncelleme tarihi: 25 Eylül 2023
              </p>
              <p>
                Hoş geldiniz! Bu gizlilik politikası, Slipyme Company tarafından işletilen web sitesi ve hizmetlerimiz ("Hizmetler") ile ilgili bilgileri nasıl topladığımız, kullanıdığımız, paylaştığımız ve koruduğumuz hakkında size bilgi sağlamayı amaçlamaktadır. Lütfen bu politikayı dikkatlice okuyunuz, çünkü Hizmetlerimizi kullanarak bu politikayı kabul etmiş sayılırsınız.
              </p>
              <p>
                1. Toplanan Bilgiler
              </p>
              <p>
                1.1. Kişisel Bilgiler: Bizden hizmet talep ettiğinizde veya bizimle iletişim kurduğunuzda, adınız, e-posta adresiniz ve diğer iletişim bilgileriniz gibi kişisel bilgileri toplayabiliriz.
              </p>
              <p>
                1.2. Çerezler ve Benzer Teknolojiler: Hizmetlerimizi kullanırken, çerezler ve benzer teknolojiler aracılığıyla cihazınıza bilgi depolayabiliriz ve erişebiliriz. Bu bilgiler, genellikle tarayıcı türü, kullanım süresi, ziyaret sayısı, tercihler ve diğer istatistikler gibi anonim verileri içerir.
              </p>
              <p>
                2. Bilgilerin Kullanımı
              </p>
              <p>
                2.1. Topladığımız kişisel bilgileri, sizinle iletişim kurmak, taleplerinizi işlemek, hizmetlerimizi geliştirmek, güncellemeler hakkında sizi bilgilendirmek ve yasal gerekliliklere uymak için kullanabiliriz.
              </p>
              <p>
                2.2. Çerezler ve benzer teknolojiler aracılığıyla topladığımız bilgileri, hizmetlerimizi geliştirmek, kullanıcı deneyimini iyileştirmek ve istatistiksel analizler yapmak amacıyla kullanabiliriz.
              </p>
              <p>
                3. Bilgilerin Paylaşımı
              </p>
              <p>
                3.1. Kişisel bilgilerinizi, yasal yükümlülüklerimize uygun olarak yetkili makamlarla ve yasal gerekliliklerle paylaşabiliriz.
              </p>
              <p>
                3.2. İş ortaklarımız ve hizmet sağlayıcılarla bilgi paylaşımı yapabiliriz, ancak bu paylaşımlar gizlilik politikamız doğrultusunda ve yasal uyumluluk çerçevesinde gerçekleşir.
              </p>
              <p>
                4. Güvenlik
              </p>
              <p>
                Kişisel bilgilerinizin güvenliğini sağlamak için uygun güvenlik önlemlerini alıyoruz. Ancak, internet üzerinden yapılan iletişimlerin veya bilgilerin tam güvenliğini garanti edemeyiz.
              </p>
              <p>
                5. Değişiklikler
              </p>
              <p>
                Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeleri önceden bildirme yükümlülüğümüz yoktur, bu nedenle periyodik olarak güncellemeleri kontrol etmeniz önemlidir.
              </p>
              <p>
                6. İletişim
              </p>
              <p>
                Gizlilik politikamızla ilgili herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bize contact@slipyme.com adresinden ulaşın.
              </p>
              <p>
                Not: Metin değiştirildiğinde duyuru yapma hakkını gizli tutarız.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
