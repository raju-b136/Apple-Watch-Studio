import React, { useEffect, useState } from "react";
import "./BandDetails.css";
import WatchDetails from "./WatchDetails";

const BandDetails = ({
  filteredBandList,
  activeOptionId,
  index,
  getCurrentIndexFromBandDetails,
}) => {
  const bands = filteredBandList;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSideViewImage, setIsSideViewImage] = useState(false);

  useEffect(() => {
    changeCurrentIndex(index);
  }, [index]);

  const changeCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  getCurrentIndexFromBandDetails(currentIndex);

  const SerieswacthFaceImagesList = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-magic-ember-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNm9zdVcvMGlreTlUeTBES2cyZVgrL1diSHkrVHEzNU5zdmtIL2c5Rk1vV0ZkaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljZm9WNHVFRm9Ybld0RnRZSGs0QkFqdi83M2QwSXRvRU5ibi8ralp4VDY3Zw",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-loop-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSThZeUJxQ1JPMXJ6T0RlV3RCYzZYYlE3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-braided-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemw2bkdDYmdTd0kwajRLdU5rSnpncjJqcURmR3ZpV3RGQU5NMUF2SXJXVVowSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdjUFVPeGpUQWF1eW1xdUFGT1N3N01GQVNuTm9jeXVUMkJsZDdCMlllR3Vt",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFendWLy9SWGQxYVp2R2ZoWC90eGZSZ3VPNkdESWlaZDczT1JDZ3lNck56akFRc0VScEh3U0w4VGlyWWlBTCtHQnMvb0k4K1JJamcyNkFVbXdpUlo3RWRiZnFQQksxY1NLOG1PM0F3YkM0aG5sRWx3QXRlQ0Y1eXNJWlEvdFlQUVo2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSTZlMkVkeVhaWERSSmpNQ3lHWDV4UmM3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-unity-bloom-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFencxZVJMcXUvaStBTTM5VUJXM2JDOTZIOU9hT1lRWUhZWXo4dkN1UUxyOGNUTXppL2Y2ckhoTlZqTFdMVDU5MUE1Vk01MnRhY2h1cjZsT2FGZkxNWmY0YS9LQUhrZzFGK2Q5OG03NnhkTitqVmhZbHpURzh2Z3FZVFExTWFOWWdq",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-pure-platinum-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZlT3hHbUl4RE1ld2o4Z3Q0RmFaMDhNaXVLVmk2TnF5bFBHc2tjWEdNemRsOTNtamphYmpsN21SVmtTaTVHUnJ2NkNQUGtTSTROdWdGSnNJa1dleEhYUkVPMzZGR0VROHAxYWVhRVROejFPZDVjcHg4QXRDWWZnZkpFdmdzckkrdw",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-blue-flame-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdvVWxlMXkramRTK1VsMlJWcW9KcDJ3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsxU3BRSXFqcmNUTHFQUXBCOHpYYjRCZTgwWndVamFGd0VueGJESi9oc211UQ",
  ];

  const HermeswacthFaceImagesList = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-vert-moyen-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3Y1MU1hV1c5UWl0Q21USjNyMkJxejluL3BTbXFFd1ltZEcyelYxeFRDV3Zyb2FmcTM0VnVWUFlORHRleVk4WmdLSjFVQUNMMTRDMmpEQTU4alJwaXczVGYxQWFpeTNZUjhveGlsZTNCWHdhK0ZabDFMZjFWb3M0TnhqV0piL1Y0QQ",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-bleu-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3VSZlVzb29YTjFsRXdkTzYwTlloQWNidVdKVnNpVW1PQTJwMk1xeDd0UUg0QUJaeGVlcGF0YmUzTFJXaVVCdkZiYzJLajlNYm1HKzBqaThWMFZzZHlmN2pMM21vbHZNeDF4Z0loVFRNOVltbTJXS3BRMVgvTmt4WStpS0EwUTJUQQ",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-beton-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2s0RncwakxQSWdtVHZHQ3diZVZidnljTEhSZkxKUVpKdUw0MjVLa0hrYWRVL1N2RFBhVVJMdUd3MGdWd2Z3djlLb2RJWUR2V252KzJaem1mNHNrVDFtTnFDZzBRVVZlT1E2dFllcm93K3pCWkp4ckNoN0FxaWV5VXlWdzRlSUNOdw",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSTZlMkVkeVhaWERSSmpNQ3lHWDV4UmM3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-beton-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3BlZGxZN0hMdWlvSVRwUUpmY2F0WFZpWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-pure-platinum-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZlT3hHbUl4RE1ld2o4Z3Q0RmFaMDhNaXVLVmk2TnF5bFBHc2tjWEdNemRsOTNtamphYmpsN21SVmtTaTVHUnJ2NkNQUGtTSTROdWdGSnNJa1dleEhYUkVPMzZGR0VROHAxYWVhRVROejFPZDVjcHg4QXRDWWZnZkpFdmdzckkrdw",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-blue-flame-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdvVWxlMXkramRTK1VsMlJWcW9KcDJ3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsxU3BRSXFqcmNUTHFQUXBCOHpYYjRCZTgwWndVamFGd0VueGJESi9oc211UQ",
  ];

  const SEwacthFaceImagesList = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-pride-braided-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvckFlY0tZR2RsaFFWN2E5dGZza1VNQkloQU1tdXpyU08veGU4UlpZaTNVaDNXNXVDMUNEV3VkZDRvQnpFY3AzSy9TNE40VncxdlI0RlRGNHN3QUFWelRkWHZhVEVOd3RKWmhYbTl6VEdNNEtj",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSTZlMkVkeVhaWERSSmpNQ3lHWDV4UmM3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-pure-platinum-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZlT3hHbUl4RE1ld2o4Z3Q0RmFaMDhNaXVLVmk2TnF5bFBHc2tjWEdNemRsOTNtamphYmpsN21SVmtTaTVHUnJ2NkNQUGtTSTROdWdGSnNJa1dleEhYUkVPMzZGR0VROHAxYWVhRVROejFPZDVjcHg4QXRDWWZnZkpFdmdzckkrdw",
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-blue-flame-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdvVWxlMXkramRTK1VsMlJWcW9KcDJ3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsxU3BRSXFqcmNUTHFQUXBCOHpYYjRCZTgwWndVamFGd0VueGJESi9oc211UQ",
  ];

  const getDynamicFaceImagesList = () => {
    if (activeOptionId === "Series") {
      return SerieswacthFaceImagesList;
    } else if (activeOptionId === "Hermes") {
      return HermeswacthFaceImagesList;
    } else {
      return SEwacthFaceImagesList;
    }
  };

  const wacthFaceImagesList = getDynamicFaceImagesList();

  const watchFaceImage = wacthFaceImagesList[currentIndex];

  const changeSortby = () => {
    setIsSideViewImage(!isSideViewImage);
  };

  const filteredList = bands.filter(
    (eachOption) => eachOption.id === currentIndex
  );
  const filteredObject = filteredList[0];

  getCurrentIndexFromBandDetails(filteredObject);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < bands.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const changeImage = (firstIndex, secondIndex) => {
    const k = bands.slice(firstIndex, secondIndex);
    const M = bands[currentIndex].urlSideview;

    if (currentIndex === 0) {
      return [
        { id: k[0].id, urlFrontview: M },
        { id: k[1].id, urlFrontview: k[1].urlFrontview },
        { id: k[2].id, urlFrontview: k[2].urlFrontview },
      ];
    } else if (currentIndex === 1) {
      return [
        { id: k[0].id, urlFrontview: k[0].urlFrontview },
        { id: k[1].id, urlFrontview: M },
        { id: k[2].id, urlFrontview: k[2].urlFrontview },
        { id: k[3].id, urlFrontview: k[3].urlFrontview },
      ];
    } else if (currentIndex === 13) {
      return [
        { id: k[0].id, urlFrontview: k[0].urlFrontview },
        { id: k[1].id, urlFrontview: k[1].urlFrontview },
        { id: k[2].id, urlFrontview: M },
        { id: k[3].id, urlFrontview: k[3].urlFrontview },
      ];
    } else if (currentIndex === 14) {
      return [
        { id: k[0].id, urlFrontview: k[0].urlFrontview },
        { id: k[1].id, urlFrontview: k[1].urlFrontview },
        { id: k[2].id, urlFrontview: M },
      ];
    } else {
      return [
        { id: k[0].id, urlFrontview: k[0].urlFrontview },
        { id: k[1].id, urlFrontview: k[1].urlFrontview },
        { id: k[2].id, urlFrontview: M },
        { id: k[3].id, urlFrontview: k[3].urlFrontview },
        { id: k[4].id, urlFrontview: k[4].urlFrontview },
      ];
    }
  };

  const giveBandSlice = (firstIndex, secondIndex) => {
    return isSideViewImage
      ? changeImage(firstIndex, secondIndex)
      : bands.slice(firstIndex, secondIndex);
  };

  const getVisibleBands = () => {
    switch (currentIndex) {
      case 0:
        return giveBandSlice(0, 3);

      case 1:
        return giveBandSlice(0, 4);

      case 2:
        return giveBandSlice(0, 5);

      case 3:
        return giveBandSlice(1, 6);

      case 4:
        return giveBandSlice(2, 7);

      case 5:
        return giveBandSlice(3, 8);

      case 6:
        return giveBandSlice(4, 9);

      case 7:
        return giveBandSlice(5, 10);

      case 8:
        return giveBandSlice(6, 11);

      case 9:
        return giveBandSlice(7, 12);

      case 10:
        return giveBandSlice(8, 13);

      case 11:
        return giveBandSlice(9, 14);

      case 12:
        return giveBandSlice(10, 15);

      case 13:
        return giveBandSlice(11, 15);

      case 14:
        return giveBandSlice(12, 15);

      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div className="carousel-container">
          {currentIndex > 0 && (
            <button
              className={
                isSideViewImage ? "watchBandHide" : "carousel-button left"
              }
              onClick={moveLeft}
            >
              &lt;
            </button>
          )}
          <div
            className={`carousel ${
              currentIndex === 0
                ? "left-space"
                : currentIndex === 1
                ? "left-space-1"
                : currentIndex === 14
                ? "right-space"
                : currentIndex === 13
                ? "right-space-1"
                : ""
            }`}
          >
            {getVisibleBands().map((band) => (
              <div
                key={band.id}
                onClick={() => {
                  setCurrentIndex(band.id);
                  setIsSideViewImage(false);
                }}
                className="band"
              >
                <img src={band.urlFrontview} alt={band.optionId} />
              </div>
            ))}
          </div>
          {currentIndex < bands.length - 1 && (
            <button
              className={
                isSideViewImage ? "watchBandHide" : "carousel-button right"
              }
              onClick={moveRight}
            >
              &gt;
            </button>
          )}
        </div>

        <img
          className={isSideViewImage ? "watchBandHide" : "watchband"}
          src={watchFaceImage}
          alt="watch"
        />
      </div>
      <div className="details-Component">
        <WatchDetails
          isSideViewImage={isSideViewImage}
          changeSortby={changeSortby}
          filteredObject={filteredObject}
        />
      </div>
    </div>
  );
};

export default BandDetails;
