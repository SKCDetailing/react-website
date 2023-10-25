import React from 'react';

const MeetingLinks = ({ vehicleType, selectedPackage, selectedAddOns }) => {
  const meetingLinks = {
    'Sedan-Basic Wash & Wax-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NcAlbIZjC5cjk6opT6Dd1hy9CzfHIb9ZANjhEZ81DxAOLAi_ryFFgGvWDPS1TH_WO9f_T2c59?gv=true',
    'Sedan-Basic Wash & Wax-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Ej4Pq2ZPX82lVcl3Aq8STCTCEwN_8JU7Wqh1JKTynrt1QYGNuPun_sIaWJI8XV04uOsu8KoA-?gv=true',
    'Sedan-Basic Wash & Wax-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ08qwyNTnhffYRRfihQUXBrFSOMyGrLlBe_j7idVTiAu0HweKUSoMzRbF_Mb54ckgCk35apW__y?gv=true',
    'Sedan-Basic Wash & Wax-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3QHma-LezPlNykQ4noROxtjsGBD7BVCjNOirZ2vzNn6TXrM1j0rrK-Gjybujp4sD5FcbCS2hb6?gv=true',
    'Sedan-Basic Wash & Wax-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3QHma-LezPlNykQ4noROxtjsGBD7BVCjNOirZ2vzNn6TXrM1j0rrK-Gjybujp4sD5FcbCS2hb6?gv=true',


    'Sedan-Full Interior Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3mtwRvQ8emaQ5FTZN09CoqMTOTbQyQHI5SdAO1784X9ajcp2d6mpSc71NoqRvDQzvC-3_kDkxJ?gv=true',
    'Sedan-Full Interior Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Mpw0-2mG87nkV6Rr4R0aAw43SZ4B1xrdY_1-UDbLCN1boY_fBGLHpvuAB5OT-1AgII8wYFj2b?gv=true',
    'Sedan-Full Interior Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2eXtlEPH89B39OlMZOYAmAuie9SmF2E5gi_7K2sWlWFh9c6Z-A2JUeL44hhqNSNjXdgMpVjG5N?gv=true',
    'Sedan-Full Interior Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Klrp0edE-gtyx_Srb2K71RV8-2NJLHF0hhJ4tRzGIxCSDAfwFxUJqW-G74nJZl4AoFeFm249k?gv=true',
    'Sedan-Full Interior Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Klrp0edE-gtyx_Srb2K71RV8-2NJLHF0hhJ4tRzGIxCSDAfwFxUJqW-G74nJZl4AoFeFm249k?gv=true',

    'Sedan-Full Exterior Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2BYUP7glELVDWD_C8TmRVGcLQCILqYifA1UwtVALKrhGPJCO8L8PY3FDcJxnelqR3SQGJFp-yx?gv=true',
    'Sedan-Full Exterior Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Oom5YnR-1MoznIjPUVaN9O8yVhwvHiBIkU2ToLB8t1Zd22uTUKjJj-y2UpsywuLNqcCLRClQ8?gv=true',
    'Sedan-Full Exterior Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39PksVQKR89TLQc6mxv2dk0aV5yYhEq0fO6YQR6AxHaSUqMyDmO9N4RxZrI_FRJ6QG_m5HMs0C?gv=true',
    'Sedan-Full Exterior Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3m5M6W_f3iuGrizSVh_6JQov5I7E10J3YWuDmZmyjcqgq30ZgPskmPet3_iPg7Uf1Xc59AU2m1?gv=true',
    'Sedan-Full Exterior Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3m5M6W_f3iuGrizSVh_6JQov5I7E10J3YWuDmZmyjcqgq30ZgPskmPet3_iPg7Uf1Xc59AU2m1?gv=true',

    'Sedan-Premium Full Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23d4srCrhgYU_6z5RX_Hn0lLW8bTpOmk06U2mMKKOHehznRjQHOsITTwk-GLjTMDlrf_CCaILF?gv=true',
    'Sedan-Premium Full Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2DOAIBArQsMFTJ-MYZeIE9KeNpOVwljt4iSxhNgC2P35eM73PEna_elwAZms-boww7dK43vKX4?gv=true',
    'Sedan-Premium Full Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3rxtHyeI0pNC1rOBjtP_QT6Kr4InIy0p3rm1F7j16lgdIYimeVL7alkDlWNG6B1pugsKxq9h_r?gv=true',
    'Sedan-Premium Full Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZcnQsz9qzCOzgjpnewTfjbI3_taV04kIUF0rBDbvQtQd2-dameFSMQXqJT3VTdeRUYrHFeB8j?gv=true',
    'Sedan-Premium Full Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ZcnQsz9qzCOzgjpnewTfjbI3_taV04kIUF0rBDbvQtQd2-dameFSMQXqJT3VTdeRUYrHFeB8j?gv=true',

    'Truck / SUV / Van-Basic Wash & Wax-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0iHJt0UKLLPUtx1_3UWI02ffBo_NUZBH3lYKWSXx1B48SRWiCoAHBQWzS5vNuIgQniVcW47vZ7?gv=true',
    'Truck / SUV / Van-Basic Wash & Wax-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2vxbvnfFWOfM0rvdsQxCPaYwriuBTvVUG44mQ_y1lRKFsY19pt4ofVReZKHCc9fEymBkIV-y6M?gv=true',
    'Truck / SUV / Van-Basic Wash & Wax-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oWHvOGS_TyQ1IjBWNhlYpYwdN7tQRRRY8T3YevczXs_K_iyLdNFw4_wh-FgR2P8QC7ruiEMsd?gv=true',
    'Truck / SUV / Van-Basic Wash & Wax-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-SAdElQE2XVCf_PIqztlebgSEM_r-1UiZK9XSII6rHL_qtvwDm6gqIrbvK8p3invUHfhk985c?gv=true',
    'Truck / SUV / Van-Basic Wash & Wax-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-SAdElQE2XVCf_PIqztlebgSEM_r-1UiZK9XSII6rHL_qtvwDm6gqIrbvK8p3invUHfhk985c?gv=true',

    'Truck / SUV / Van-Full Interior Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2RQ-WKtDA-F0MEB1RnDETf5clfE9JQ61ixwdypxiCyS9A-aFb2Y0WqcYXOOay6VvwTd_cMnpG7?gv=true',
    'Truck / SUV / Van-Full Interior Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21jCd40j2BRa8sbL5pcNIZeY4Irh2nR68JiACf7s5rwcUDEeCLj0Ve3RipirZZio8NLNGrhzdL?gv=true',
    'Truck / SUV / Van-Full Interior Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2QU06ruhML7SY1b2LyCEnGq155Z5am3LuuP4MRk6WC7ULpgDEDCTq1f08PiYez5nRnvCWs5RAC?gv=true',
    'Truck / SUV / Van-Full Interior Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2A00yrOVqls0OKFXgEHFtek6VBewB45NXLcaKrkDzl-MxbOQd4_F02wbIdl6xVBOyuy3DjGAHO?gv=true',
    'Truck / SUV / Van-Full Interior Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2A00yrOVqls0OKFXgEHFtek6VBewB45NXLcaKrkDzl-MxbOQd4_F02wbIdl6xVBOyuy3DjGAHO?gv=true',

    'Truck / SUV / Van-Full Exterior Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2kRkgcLV495uuoZj1vW5jn61NEMqeKEUTlBHI-h8_6sFA_oeHs0zJ3rUgT24sQxVAS5Sn1wqzt?gv=true',
    'Truck / SUV / Van-Full Exterior Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TZvX8_Cq5p1F5d13eby5OoT788DitnSpZ9-DhE-FISQnXkeZxNDEBEYbZD2JIBuwXAfQxVJWQ?gv=true',
    'Truck / SUV / Van-Full Exterior Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2wLFg538pLh1MQ2gnDpwXRSKDM9x_6ef_s9OyMZPf-ZeoStEu5TkAJWMri3f1ur8_htL8p6A02?gv=true',
    'Truck / SUV / Van-Full Exterior Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Cdn-Cy6n7kHfdAtq6OglDwN_oFLxNJZBX4RYIx_Ei5smQ3VIfpVfVg5X_1ABEL2LDS6pd5ACI?gv=true',
    'Truck / SUV / Van-Full Exterior Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Cdn-Cy6n7kHfdAtq6OglDwN_oFLxNJZBX4RYIx_Ei5smQ3VIfpVfVg5X_1ABEL2LDS6pd5ACI?gv=true',

    'Truck / SUV / Van-Premium Full Detail-': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Xnj_fSwY3cnnBYG6fwnzPvCYI9YqJuqFkdrVnSPwQVXiNDZ1fhTbfZ5uUqbm1ApiaBbgYT69r?gv=true',
    'Truck / SUV / Van-Premium Full Detail-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0miDJTMAmRl_nKHHV5AzGfo_LYuhiRUp9q6BBbuJN5L-H3GF6QzUrNAK3Tjo_x2TSVKlrsQDbD?gv=true',
    'Truck / SUV / Van-Premium Full Detail-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1qv1JcNHBl2YI3bOc1D1SYzLMqlS5zjt68mNlSWAh2BNtoqs1yL6vmj-1lWzswGnHXiE4LUGNi?gv=true',
    'Truck / SUV / Van-Premium Full Detail-headlight-restoration-engine-bay-cleaning': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PV2v6IVi9DRM5T3ebhy0Au82j6be61VKR0oTQTHJDGkEBfmnuWfFOButOCop-QnY1rQn4RP43?gv=true',
    'Truck / SUV / Van-Premium Full Detail-engine-bay-cleaning-headlight-restoration': 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PV2v6IVi9DRM5T3ebhy0Au82j6be61VKR0oTQTHJDGkEBfmnuWfFOButOCop-QnY1rQn4RP43?gv=true',
  
};

  const packageTitle = selectedPackage.title;
  const key = `${vehicleType}-${packageTitle}-${selectedAddOns.join('-')}`;
  const selectedLink = meetingLinks[key] || 'https://calendar.google.com/default-link';

  return (
    <a className='book-appointment-button' href={selectedLink} target="_blank" rel="noopener noreferrer">
      Schedule Appointment
    </a>
  );
};

export default MeetingLinks;
