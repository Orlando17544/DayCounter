class Countries {
	static COUNTRIES_DATA = [
		{code: 'AFG', name: 'Afganistán', source: require('./../../assets/flags/af.png')},
		{code: 'ALA', name: 'Åland, Islas', source: require('./../../assets/flags/ax.png')},
		{code: 'ALB', name: 'Albania', source: require('./../../assets/flags/al.png')},
		{code: 'DEU', name: 'Alemania', source: require('./../../assets/flags/de.png')},
		{code: 'AND', name: 'Andorra', source: require('./../../assets/flags/ad.png')},
		{code: 'AGO', name: 'Angola', source: require('./../../assets/flags/ao.png')},
		{code: 'AIA', name: 'Anguila', source: require('./../../assets/flags/ai.png')},
		{code: 'ATA', name: 'Antártida', source: require('./../../assets/flags/aq.png')},
		{code: 'ATG', name: 'Antigua y Barbuda', source: require('./../../assets/flags/ag.png')},
		{code: 'SAU', name: 'Arabia Saudita', source: require('./../../assets/flags/sa.png')},
		{code: 'DZA', name: 'Argelia', source: require('./../../assets/flags/dz.png')},
		{code: 'ARG', name: 'Argentina', source: require('./../../assets/flags/ar.png')},
		{code: 'ARM', name: 'Armenia', source: require('./../../assets/flags/am.png')},
		{code: 'ABW', name: 'Aruba', source: require('./../../assets/flags/aw.png')},
		{code: 'AUS', name: 'Australia', source: require('./../../assets/flags/au.png')},
		{code: 'AUT', name: 'Austria', source: require('./../../assets/flags/at.png')},
		{code: 'AZE', name: 'Azerbaiyán', source: require('./../../assets/flags/az.png')},
		{code: 'BHS', name: 'Bahamas ', source: require('./../../assets/flags/bs.png')},
		{code: 'BGD', name: 'Bangladés', source: require('./../../assets/flags/bd.png')},
		{code: 'BRB', name: 'Barbados', source: require('./../../assets/flags/bb.png')},
		{code: 'BHR', name: 'Baréin', source: require('./../../assets/flags/bh.png')},
		{code: 'BLR', name: 'Belarús', source: require('./../../assets/flags/by.png')},
		{code: 'BEL', name: 'Bélgica', source: require('./../../assets/flags/be.png')},
		{code: 'BLZ', name: 'Belice', source: require('./../../assets/flags/bz.png')},
		{code: 'BEN', name: 'Benín', source: require('./../../assets/flags/bj.png')},
		{code: 'BMU', name: 'Bermudas', source: require('./../../assets/flags/bm.png')},
		{code: 'BTN', name: 'Bhután', source: require('./../../assets/flags/bt.png')},
		{code: 'BOL', name: 'Bolivia ', source: require('./../../assets/flags/bo.png')},
		{code: 'BES', name: 'Bonaire, San Eustaquio y Saba', source: require('./../../assets/flags/bq.png')},
		{code: 'BIH', name: 'Bosnia y Herzegovina', source: require('./../../assets/flags/ba.png')},
		{code: 'BWA', name: 'Botsuana', source: require('./../../assets/flags/bw.png')},
		{code: 'BVT', name: 'Bouvet, Isla', source: require('./../../assets/flags/bv.png')},
		{code: 'BRA', name: 'Brasil', source: require('./../../assets/flags/br.png')},
		{code: 'BRN', name: 'Brunéi Darussalam', source: require('./../../assets/flags/bn.png')},
		{code: 'BGR', name: 'Bulgaria', source: require('./../../assets/flags/bg.png')},
		{code: 'BFA', name: 'Burkina Faso', source: require('./../../assets/flags/bf.png')},
		{code: 'BDI', name: 'Burundi', source: require('./../../assets/flags/bi.png')},
		{code: 'CPV', name: 'Cabo Verde', source: require('./../../assets/flags/cv.png')},
		{code: 'CYM', name: 'Caimán,  Islas', source: require('./../../assets/flags/ky.png')},
		{code: 'KHM', name: 'Camboya', source: require('./../../assets/flags/kh.png')},
		{code: 'CMR', name: 'Camerún', source: require('./../../assets/flags/cm.png')},
		{code: 'CAN', name: 'Canadá', source: require('./../../assets/flags/ca.png')},
		{code: 'QAT', name: 'Catar', source: require('./../../assets/flags/qa.png')},
		{code: 'TCD', name: 'Chad', source: require('./../../assets/flags/td.png')},
		{code: 'CZE', name: 'Chequia', source: require('./../../assets/flags/cz.png')},
		{code: 'CHL', name: 'Chile', source: require('./../../assets/flags/cl.png')},
		{code: 'CHN', name: 'China', source: require('./../../assets/flags/cn.png')},
		{code: 'CYP', name: 'Chipre', source: require('./../../assets/flags/cy.png')},
		{code: 'CCK', name: 'Cocos / Keeling,  Islas', source: require('./../../assets/flags/cc.png')},
		{code: 'COL', name: 'Colombia', source: require('./../../assets/flags/co.png')},
		{code: 'COM', name: 'Comoras ', source: require('./../../assets/flags/km.png')},
		{code: 'COG', name: 'Congo ', source: require('./../../assets/flags/cg.png')},
		{code: 'COK', name: 'Cook,  Islas', source: require('./../../assets/flags/ck.png')},
		{code: 'KOR', name: 'Corea ', source: require('./../../assets/flags/kr.png')},
		{code: 'CRI', name: 'Costa Rica', source: require('./../../assets/flags/cr.png')},
		{code: 'CIV', name: 'Côte d\'Ivoire', source: require('./../../assets/flags/ci.png')},
		{code: 'HRV', name: 'Croacia', source: require('./../../assets/flags/hr.png')},
		{code: 'CUB', name: 'Cuba', source: require('./../../assets/flags/cu.png')},
		{code: 'CUW', name: 'Curaçao', source: require('./../../assets/flags/cw.png')},
		{code: 'DNK', name: 'Dinamarca', source: require('./../../assets/flags/dk.png')},
		{code: 'DMA', name: 'Dominica', source: require('./../../assets/flags/dm.png')},
		{code: 'DOM', name: 'Dominicana,  República', source: require('./../../assets/flags/do.png')},
		{code: 'ECU', name: 'Ecuador', source: require('./../../assets/flags/ec.png')},
		{code: 'EGY', name: 'Egipto', source: require('./../../assets/flags/eg.png')},
		{code: 'SLV', name: 'El Salvador', source: require('./../../assets/flags/sv.png')},
		{code: 'ARE', name: 'Emiratos Árabes Unidos ', source: require('./../../assets/flags/ae.png')},
		{code: 'ERI', name: 'Eritrea', source: require('./../../assets/flags/er.png')},
		{code: 'SVK', name: 'Eslovaquia', source: require('./../../assets/flags/sk.png')},
		{code: 'SVN', name: 'Eslovenia', source: require('./../../assets/flags/si.png')},
		{code: 'ESP', name: 'España', source: require('./../../assets/flags/es.png')},
		{code: 'USA', name: 'Estados Unidos de América ', source: require('./../../assets/flags/us.png')},
		{code: 'EST', name: 'Estonia', source: require('./../../assets/flags/ee.png')},
		{code: 'ETH', name: 'Etiopía', source: require('./../../assets/flags/et.png')},
		{code: 'FRO', name: 'Feroe,  Islas', source: require('./../../assets/flags/fo.png')},
		{code: 'PHL', name: 'Filipinas ', source: require('./../../assets/flags/ph.png')},
		{code: 'FIN', name: 'Finlandia', source: require('./../../assets/flags/fi.png')},
		{code: 'FJI', name: 'Fiyi', source: require('./../../assets/flags/fj.png')},
		{code: 'FRA', name: 'Francia', source: require('./../../assets/flags/fr.png')},
		{code: 'GAB', name: 'Gabón', source: require('./../../assets/flags/ga.png')},
		{code: 'GMB', name: 'Gambia ', source: require('./../../assets/flags/gm.png')},
		{code: 'SGS', name: 'Georgia del Sur  y las Islas Sandwich del Sur', source: require('./../../assets/flags/gs.png')},
		{code: 'GEO', name: 'Georgia', source: require('./../../assets/flags/ge.png')},
		{code: 'GHA', name: 'Ghana', source: require('./../../assets/flags/gh.png')},
		{code: 'GIB', name: 'Gibraltar', source: require('./../../assets/flags/gi.png')},
		{code: 'GRD', name: 'Granada', source: require('./../../assets/flags/gd.png')},
		{code: 'GRC', name: 'Grecia', source: require('./../../assets/flags/gr.png')},
		{code: 'GRL', name: 'Groenlandia', source: require('./../../assets/flags/gl.png')},
		{code: 'GLP', name: 'Guadeloupe', source: require('./../../assets/flags/gp.png')},
		{code: 'GUM', name: 'Guam', source: require('./../../assets/flags/gu.png')},
		{code: 'GTM', name: 'Guatemala', source: require('./../../assets/flags/gt.png')},
		{code: 'GUF', name: 'Guayana Francesa', source: require('./../../assets/flags/gf.png')},
		{code: 'GGY', name: 'Guernsey', source: require('./../../assets/flags/gg.png')},
		{code: 'GNB', name: 'Guinea Bissau', source: require('./../../assets/flags/gw.png')},
		{code: 'GNQ', name: 'Guinea Ecuatorial', source: require('./../../assets/flags/gq.png')},
		{code: 'GIN', name: 'Guinea', source: require('./../../assets/flags/gn.png')},
		{code: 'GUY', name: 'Guyana', source: require('./../../assets/flags/gy.png')},
		{code: 'HTI', name: 'Haití', source: require('./../../assets/flags/ht.png')},
		{code: 'HMD', name: 'Heard  e Islas McDonald', source: require('./../../assets/flags/hm.png')},
		{code: 'HND', name: 'Honduras', source: require('./../../assets/flags/hn.png')},
		{code: 'HKG', name: 'Hong Kong', source: require('./../../assets/flags/hk.png')},
		{code: 'HUN', name: 'Hungría', source: require('./../../assets/flags/hu.png')},
		{code: 'IND', name: 'India', source: require('./../../assets/flags/in.png')},
		{code: 'IDN', name: 'Indonesia', source: require('./../../assets/flags/id.png')},
		{code: 'IRQ', name: 'Irak', source: require('./../../assets/flags/iq.png')},
		{code: 'IRN', name: 'Irán ', source: require('./../../assets/flags/ir.png')},
		{code: 'IRL', name: 'Irlanda', source: require('./../../assets/flags/ie.png')},
		{code: 'IMN', name: 'Isla de Man', source: require('./../../assets/flags/im.png')},
		{code: 'ISL', name: 'Islandia', source: require('./../../assets/flags/is.png')},
		{code: 'UMI', name: 'Islas Ultramarinas Menores de los Estados Unidos ', source: require('./../../assets/flags/um.png')},
		{code: 'ISR', name: 'Israel', source: require('./../../assets/flags/il.png')},
		{code: 'ITA', name: 'Italia', source: require('./../../assets/flags/it.png')},
		{code: 'JAM', name: 'Jamaica', source: require('./../../assets/flags/jm.png')},
		{code: 'JPN', name: 'Japón', source: require('./../../assets/flags/jp.png')},
		{code: 'JEY', name: 'Jersey', source: require('./../../assets/flags/je.png')},
		{code: 'JOR', name: 'Jordania', source: require('./../../assets/flags/jo.png')},
		{code: 'KAZ', name: 'Kazajistán', source: require('./../../assets/flags/kz.png')},
		{code: 'KEN', name: 'Kenia', source: require('./../../assets/flags/ke.png')},
		{code: 'KGZ', name: 'Kirguistán', source: require('./../../assets/flags/kg.png')},
		{code: 'KIR', name: 'Kiribati', source: require('./../../assets/flags/ki.png')},
		{code: 'KWT', name: 'Kuwait', source: require('./../../assets/flags/kw.png')},
		{code: 'LAO', name: 'Lao,  República Democrática Popular', source: require('./../../assets/flags/la.png')},
		{code: 'LSO', name: 'Lesoto', source: require('./../../assets/flags/ls.png')},
		{code: 'LVA', name: 'Letonia', source: require('./../../assets/flags/lv.png')},
		{code: 'LBN', name: 'Líbano', source: require('./../../assets/flags/lb.png')},
		{code: 'LBR', name: 'Liberia', source: require('./../../assets/flags/lr.png')},
		{code: 'LBY', name: 'Libia', source: require('./../../assets/flags/ly.png')},
		{code: 'LIE', name: 'Liechtenstein', source: require('./../../assets/flags/li.png')},
		{code: 'LTU', name: 'Lituania', source: require('./../../assets/flags/lt.png')},
		{code: 'LUX', name: 'Luxemburgo', source: require('./../../assets/flags/lu.png')},
		{code: 'MAC', name: 'Macao', source: require('./../../assets/flags/mo.png')},
		{code: 'MKD', name: 'Macedonia del Norte', source: require('./../../assets/flags/mk.png')},
		{code: 'MDG', name: 'Madagascar', source: require('./../../assets/flags/mg.png')},
		{code: 'MYS', name: 'Malasia', source: require('./../../assets/flags/my.png')},
		{code: 'MWI', name: 'Malawi', source: require('./../../assets/flags/mw.png')},
		{code: 'MDV', name: 'Maldivas', source: require('./../../assets/flags/mv.png')},
		{code: 'MLI', name: 'Malí', source: require('./../../assets/flags/ml.png')},
		{code: 'MLT', name: 'Malta', source: require('./../../assets/flags/mt.png')},
		{code: 'FLK', name: 'Malvinas [Falkland],  Islas', source: require('./../../assets/flags/fk.png')},
		{code: 'MNP', name: 'Marianas del Norte,  Islas', source: require('./../../assets/flags/mp.png')},
		{code: 'MAR', name: 'Marruecos', source: require('./../../assets/flags/ma.png')},
		{code: 'MHL', name: 'Marshall,  Islas', source: require('./../../assets/flags/mh.png')},
		{code: 'MTQ', name: 'Martinique', source: require('./../../assets/flags/mq.png')},
		{code: 'MUS', name: 'Mauricio', source: require('./../../assets/flags/mu.png')},
		{code: 'MRT', name: 'Mauritania', source: require('./../../assets/flags/mr.png')},
		{code: 'MYT', name: 'Mayotte', source: require('./../../assets/flags/yt.png')},
		{code: 'MEX', name: 'México', source: require('./../../assets/flags/mx.png')},
		{code: 'FSM', name: 'Micronesia ', source: require('./../../assets/flags/fm.png')},
		{code: 'MDA', name: 'Moldavia ', source: require('./../../assets/flags/md.png')},
		{code: 'MCO', name: 'Mónaco', source: require('./../../assets/flags/mc.png')},
		{code: 'MNG', name: 'Mongolia', source: require('./../../assets/flags/mn.png')},
		{code: 'MNE', name: 'Montenegro', source: require('./../../assets/flags/me.png')},
		{code: 'MSR', name: 'Montserrat', source: require('./../../assets/flags/ms.png')},
		{code: 'MOZ', name: 'Mozambique', source: require('./../../assets/flags/mz.png')},
		{code: 'MMR', name: 'Myanmar', source: require('./../../assets/flags/mm.png')},
		{code: 'NAM', name: 'Namibia', source: require('./../../assets/flags/na.png')},
		{code: 'NRU', name: 'Nauru', source: require('./../../assets/flags/nr.png')},
		{code: 'CXR', name: 'Navidad, Isla de', source: require('./../../assets/flags/cx.png')},
		{code: 'NPL', name: 'Nepal', source: require('./../../assets/flags/np.png')},
		{code: 'NIC', name: 'Nicaragua', source: require('./../../assets/flags/ni.png')},
		{code: 'NER', name: 'Níger ', source: require('./../../assets/flags/ne.png')},
		{code: 'NGA', name: 'Nigeria', source: require('./../../assets/flags/ng.png')},
		{code: 'NIU', name: 'Niue', source: require('./../../assets/flags/nu.png')},
		{code: 'NFK', name: 'Norfolk, Isla', source: require('./../../assets/flags/nf.png')},
		{code: 'NOR', name: 'Noruega', source: require('./../../assets/flags/no.png')},
		{code: 'NCL', name: 'Nueva Caledonia', source: require('./../../assets/flags/nc.png')},
		{code: 'NZL', name: 'Nueva Zelandia', source: require('./../../assets/flags/nz.png')},
		{code: 'OMN', name: 'Omán', source: require('./../../assets/flags/om.png')},
		{code: 'NLD', name: 'Países Bajos ', source: require('./../../assets/flags/nl.png')},
		{code: 'PAK', name: 'Pakistán', source: require('./../../assets/flags/pk.png')},
		{code: 'PLW', name: 'Palaos', source: require('./../../assets/flags/pw.png')},
		{code: 'PSE', name: 'Palestina, Estado de', source: require('./../../assets/flags/ps.png')},
		{code: 'PAN', name: 'Panamá', source: require('./../../assets/flags/pa.png')},
		{code: 'PNG', name: 'Papúa Nueva Guinea', source: require('./../../assets/flags/pg.png')},
		{code: 'PRY', name: 'Paraguay', source: require('./../../assets/flags/py.png')},
		{code: 'PER', name: 'Perú', source: require('./../../assets/flags/pe.png')},
		{code: 'PCN', name: 'Pitcairn', source: require('./../../assets/flags/pn.png')},
		{code: 'PYF', name: 'Polinesia Francesa', source: require('./../../assets/flags/pf.png')},
		{code: 'POL', name: 'Polonia', source: require('./../../assets/flags/pl.png')},
		{code: 'PRT', name: 'Portugal', source: require('./../../assets/flags/pt.png')},
		{code: 'PRI', name: 'Puerto Rico', source: require('./../../assets/flags/pr.png')},
		{code: 'GBR', name: 'Reino Unido de Gran Bretaña e Irlanda del Norte ', source: require('./../../assets/flags/gb.png')},
		{code: 'SYR', name: 'República Árabe Siria', source: require('./../../assets/flags/sy.png')},
		{code: 'CAF', name: 'República Centroafricana ', source: require('./../../assets/flags/cf.png')},
		{code: 'COD', name: 'República Democrática del Congo', source: require('./../../assets/flags/cd.png')},
		{code: 'PRK', name: 'República Popular Democrática de Corea', source: require('./../../assets/flags/kp.png')},
		{code: 'REU', name: 'Reunión', source: require('./../../assets/flags/re.png')},
		{code: 'RWA', name: 'Ruanda', source: require('./../../assets/flags/rw.png')},
		{code: 'ROU', name: 'Rumania', source: require('./../../assets/flags/ro.png')},
		{code: 'RUS', name: 'Rusia,  Federación de', source: require('./../../assets/flags/ru.png')},
		{code: 'ESH', name: 'Sahara Occidental', source: require('./../../assets/flags/eh.png')},
		{code: 'BLM', name: 'Saint Barthélemy', source: require('./../../assets/flags/bl.png')},
		{code: 'MAF', name: 'Saint Martin ', source: require('./../../assets/flags/mf.png')},
		{code: 'SLB', name: 'Salomón, Islas', source: require('./../../assets/flags/sb.png')},
		{code: 'ASM', name: 'Samoa Americana', source: require('./../../assets/flags/as.png')},
		{code: 'WSM', name: 'Samoa', source: require('./../../assets/flags/ws.png')},
		{code: 'KNA', name: 'San Cristóbal y Nieves', source: require('./../../assets/flags/kn.png')},
		{code: 'SMR', name: 'San Marino', source: require('./../../assets/flags/sm.png')},
		{code: 'SPM', name: 'San Pedro y Miquelón', source: require('./../../assets/flags/pm.png')},
		{code: 'VCT', name: 'San Vicente y las Granadinas', source: require('./../../assets/flags/vc.png')},
		{code: 'SHN', name: 'Santa Helena, Ascensión y Tristán de Acuña', source: require('./../../assets/flags/sh.png')},
		{code: 'LCA', name: 'Santa Lucía', source: require('./../../assets/flags/lc.png')},
		{code: 'VAT', name: 'Santa Sede ', source: require('./../../assets/flags/va.png')},
		{code: 'STP', name: 'Santo Tomé y Príncipe', source: require('./../../assets/flags/st.png')},
		{code: 'SEN', name: 'Senegal', source: require('./../../assets/flags/sn.png')},
		{code: 'SRB', name: 'Serbia', source: require('./../../assets/flags/rs.png')},
		{code: 'SYC', name: 'Seychelles', source: require('./../../assets/flags/sc.png')},
		{code: 'SLE', name: 'Sierra leona', source: require('./../../assets/flags/sl.png')},
		{code: 'SGP', name: 'Singapur', source: require('./../../assets/flags/sg.png')},
		{code: 'SXM', name: 'Sint Maarten ', source: require('./../../assets/flags/sx.png')},
		{code: 'SOM', name: 'Somalia', source: require('./../../assets/flags/so.png')},
		{code: 'LKA', name: 'Sri Lanka', source: require('./../../assets/flags/lk.png')},
		{code: 'SWZ', name: 'Suazilandia', source: require('./../../assets/flags/sz.png')},
		{code: 'ZAF', name: 'Sudáfrica', source: require('./../../assets/flags/za.png')},
		{code: 'SSD', name: 'Sudán del Sur', source: require('./../../assets/flags/ss.png')},
		{code: 'SDN', name: 'Sudán ', source: require('./../../assets/flags/sd.png')},
		{code: 'SWE', name: 'Suecia', source: require('./../../assets/flags/se.png')},
		{code: 'CHE', name: 'Suiza', source: require('./../../assets/flags/ch.png')},
		{code: 'SUR', name: 'Suriname', source: require('./../../assets/flags/sr.png')},
		{code: 'SJM', name: 'Svalbard y Jan Mayen', source: require('./../../assets/flags/sj.png')},
		{code: 'THA', name: 'Tailandia', source: require('./../../assets/flags/th.png')},
		{code: 'TWN', name: 'Taiwán ', source: require('./../../assets/flags/tw.png')},
		{code: 'TZA', name: 'Tanzania, República Unida de', source: require('./../../assets/flags/tz.png')},
		{code: 'TJK', name: 'Tayikistán', source: require('./../../assets/flags/tj.png')},
		{code: 'IOT', name: 'Territorio Británico del Océano Índico ', source: require('./../../assets/flags/io.png')},
		{code: 'ATF', name: 'Tierras Australes Francesas ', source: require('./../../assets/flags/tf.png')},
		{code: 'TLS', name: 'Timor-Leste', source: require('./../../assets/flags/tl.png')},
		{code: 'TGO', name: 'Togo', source: require('./../../assets/flags/tg.png')},
		{code: 'TKL', name: 'Tokelau', source: require('./../../assets/flags/tk.png')},
		{code: 'TON', name: 'Tonga', source: require('./../../assets/flags/to.png')},
		{code: 'TTO', name: 'Trinidad y Tobago', source: require('./../../assets/flags/tt.png')},
		{code: 'TUN', name: 'Túnez', source: require('./../../assets/flags/tn.png')},
		{code: 'TCA', name: 'Turcas y Caicos,  Islas', source: require('./../../assets/flags/tc.png')},
		{code: 'TKM', name: 'Turkmenistán', source: require('./../../assets/flags/tm.png')},
		{code: 'TUR', name: 'Turquía', source: require('./../../assets/flags/tr.png')},
		{code: 'TUV', name: 'Tuvalu', source: require('./../../assets/flags/tv.png')},
		{code: 'UKR', name: 'Ucrania', source: require('./../../assets/flags/ua.png')},
		{code: 'UGA', name: 'Uganda', source: require('./../../assets/flags/ug.png')},
		{code: 'URY', name: 'Uruguay', source: require('./../../assets/flags/uy.png')},
		{code: 'UZB', name: 'Uzbekistán', source: require('./../../assets/flags/uz.png')},
		{code: 'VUT', name: 'Vanuatu', source: require('./../../assets/flags/vu.png')},
		{code: 'VEN', name: 'Venezuela ', source: require('./../../assets/flags/ve.png')},
		{code: 'VNM', name: 'Viet Nam', source: require('./../../assets/flags/vn.png')},
		{code: 'VGB', name: 'Vírgenes británicas, Islas', source: require('./../../assets/flags/vg.png')},
		{code: 'VIR', name: 'Vírgenes de los Estados Unidos, Islas', source: require('./../../assets/flags/vi.png')},
		{code: 'WLF', name: 'Wallis y Futuna', source: require('./../../assets/flags/wf.png')},
		{code: 'YEM', name: 'Yemen', source: require('./../../assets/flags/ye.png')},
		{code: 'DJI', name: 'Yibuti', source: require('./../../assets/flags/dj.png')},
		{code: 'ZMB', name: 'Zambia', source: require('./../../assets/flags/zm.png')},
		{code: 'ZWE', name: 'Zimbabue', source: require('./../../assets/flags/zw.png')}
	];

	static getName(code) {
		let name;
		for (const item of this.COUNTRIES_DATA) {
			if (item.code == code) {
				name = item.name;
				break;
			}
		}
		return name;
	}

	static getSource(code) {
		let source;
		for (const item of this.COUNTRIES_DATA) {
			if (item.code == code) {
				source = item.source;
				break;
			}
		}
		return source;
	}

	static getCountriesData() {
		return this.COUNTRIES_DATA;
	}
}

export default Countries;
