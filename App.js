/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableOpacity,
	Modal,
	TextInput,
	Animated,
	Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
/*

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

*/

/*

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
	style={[
	  styles.sectionTitle,
	  {
	    color: isDarkMode ? Colors.white : Colors.black,
	  },
	]}>
	{title}
      </Text>
      <Text
	style={[
	  styles.sectionDescription,
	  {
	    color: isDarkMode ? Colors.light : Colors.dark,
	  },
	]}>
	{children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
	contentInsetAdjustmentBehavior="automatic"
	style={backgroundStyle}>
	<Header />
	<View
	  style={{
	    backgroundColor: isDarkMode ? Colors.black : Colors.white,
	  }}>
	  <Section title="Step One">
	    Edit <Text style={styles.highlight}>App.js</Text> to change this
	    screen and then come back to see your edits.
	  </Section>
	  <Section title="See Your Changes">
	    <ReloadInstructions />
	  </Section>
	  <Section title="Debug">
	    <DebugInstructions />
	  </Section>
	  <Section title="Learn More">
	    Read the docs to discover what to do next:
	  </Section>
	  <LearnMoreLinks />
	</View>
      </ScrollView>
    </SafeAreaView>
  );
};*/
//eff0f0

const App: () => Node = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#222' : '#F3F3F3',
	};

	const [countryData, setCountryData] = useState({name: 'Portugal', source: require('./assets/flags/pt.png')});

	const [modalVisibleCountries, setModalVisibleCountries] = useState(false);

	const [maximumDays, setMaximumDays] = useState('999');

	const COUNTRIES_DATA = [
		{name: 'Afganistán', source: require('./assets/flags/af.png')},
		{name: 'Åland, Islas', source: require('./assets/flags/ax.png')},
		{name: 'Albania', source: require('./assets/flags/al.png')},
		{name: 'Alemania', source: require('./assets/flags/de.png')},
		{name: 'Andorra', source: require('./assets/flags/ad.png')},
		{name: 'Angola', source: require('./assets/flags/ao.png')},
		{name: 'Anguila', source: require('./assets/flags/ai.png')},
		{name: 'Antártida', source: require('./assets/flags/aq.png')},
		{name: 'Antigua y Barbuda', source: require('./assets/flags/ag.png')},
		{name: 'Arabia Saudita', source: require('./assets/flags/sa.png')},
		{name: 'Argelia', source: require('./assets/flags/dz.png')},
		{name: 'Argentina', source: require('./assets/flags/ar.png')},
		{name: 'Armenia', source: require('./assets/flags/am.png')},
		{name: 'Aruba', source: require('./assets/flags/aw.png')},
		{name: 'Australia', source: require('./assets/flags/au.png')},
		{name: 'Austria', source: require('./assets/flags/at.png')},
		{name: 'Azerbaiyán', source: require('./assets/flags/az.png')},
		{name: 'Bahamas ', source: require('./assets/flags/bs.png')},
		{name: 'Bangladés', source: require('./assets/flags/bd.png')},
		{name: 'Barbados', source: require('./assets/flags/bb.png')},
		{name: 'Baréin', source: require('./assets/flags/bh.png')},
		{name: 'Belarús', source: require('./assets/flags/by.png')},
		{name: 'Bélgica', source: require('./assets/flags/be.png')},
		{name: 'Belice', source: require('./assets/flags/bz.png')},
		{name: 'Benín', source: require('./assets/flags/bj.png')},
		{name: 'Bermudas', source: require('./assets/flags/bm.png')},
		{name: 'Bhután', source: require('./assets/flags/bt.png')},
		{name: 'Bolivia ', source: require('./assets/flags/bo.png')},
		{name: 'Bonaire, San Eustaquio y Saba', source: require('./assets/flags/bq.png')},
		{name: 'Bosnia y Herzegovina', source: require('./assets/flags/ba.png')},
		{name: 'Botsuana', source: require('./assets/flags/bw.png')},
		{name: 'Bouvet, Isla', source: require('./assets/flags/bv.png')},
		{name: 'Brasil', source: require('./assets/flags/br.png')},
		{name: 'Brunéi Darussalam', source: require('./assets/flags/bn.png')},
		{name: 'Bulgaria', source: require('./assets/flags/bg.png')},
		{name: 'Burkina Faso', source: require('./assets/flags/bf.png')},
		{name: 'Burundi', source: require('./assets/flags/bi.png')},
		{name: 'Cabo Verde', source: require('./assets/flags/cv.png')},
		{name: 'Caimán,  Islas', source: require('./assets/flags/ky.png')},
		{name: 'Camboya', source: require('./assets/flags/kh.png')},
		{name: 'Camerún', source: require('./assets/flags/cm.png')},
		{name: 'Canadá', source: require('./assets/flags/ca.png')},
		{name: 'Catar', source: require('./assets/flags/qa.png')},
		{name: 'Chad', source: require('./assets/flags/td.png')},
		{name: 'Chequia', source: require('./assets/flags/cz.png')},
		{name: 'Chile', source: require('./assets/flags/cl.png')},
		{name: 'China', source: require('./assets/flags/cn.png')},
		{name: 'Chipre', source: require('./assets/flags/cy.png')},
		{name: 'Cocos / Keeling,  Islas', source: require('./assets/flags/cc.png')},
		{name: 'Colombia', source: require('./assets/flags/co.png')},
		{name: 'Comoras ', source: require('./assets/flags/km.png')},
		{name: 'Congo ', source: require('./assets/flags/cg.png')},
		{name: 'Cook,  Islas', source: require('./assets/flags/ck.png')},
		{name: 'Corea ', source: require('./assets/flags/kr.png')},
		{name: 'Costa Rica', source: require('./assets/flags/cr.png')},
		{name: 'Côte d\'Ivoire', source: require('./assets/flags/ci.png')},
		{name: 'Croacia', source: require('./assets/flags/hr.png')},
		{name: 'Cuba', source: require('./assets/flags/cu.png')},
		{name: 'Curaçao', source: require('./assets/flags/cw.png')},
		{name: 'Dinamarca', source: require('./assets/flags/dk.png')},
		{name: 'Dominica', source: require('./assets/flags/dm.png')},
		{name: 'Dominicana,  República', source: require('./assets/flags/do.png')},
		{name: 'Ecuador', source: require('./assets/flags/ec.png')},
		{name: 'Egipto', source: require('./assets/flags/eg.png')},
		{name: 'El Salvador', source: require('./assets/flags/sv.png')},
		{name: 'Emiratos Árabes Unidos ', source: require('./assets/flags/ae.png')},
		{name: 'Eritrea', source: require('./assets/flags/er.png')},
		{name: 'Eslovaquia', source: require('./assets/flags/sk.png')},
		{name: 'Eslovenia', source: require('./assets/flags/si.png')},
		{name: 'España', source: require('./assets/flags/es.png')},
		{name: 'Estados Unidos de América ', source: require('./assets/flags/us.png')},
		{name: 'Estonia', source: require('./assets/flags/ee.png')},
		{name: 'Etiopía', source: require('./assets/flags/et.png')},
		{name: 'Feroe,  Islas', source: require('./assets/flags/fo.png')},
		{name: 'Filipinas ', source: require('./assets/flags/ph.png')},
		{name: 'Finlandia', source: require('./assets/flags/fi.png')},
		{name: 'Fiyi', source: require('./assets/flags/fj.png')},
		{name: 'Francia', source: require('./assets/flags/fr.png')},
		{name: 'Gabón', source: require('./assets/flags/ga.png')},
		{name: 'Gambia ', source: require('./assets/flags/gm.png')},
		{name: 'Georgia del Sur  y las Islas Sandwich del Sur', source: require('./assets/flags/gs.png')},
		{name: 'Georgia', source: require('./assets/flags/ge.png')},
		{name: 'Ghana', source: require('./assets/flags/gh.png')},
		{name: 'Gibraltar', source: require('./assets/flags/gi.png')},
		{name: 'Granada', source: require('./assets/flags/gd.png')},
		{name: 'Grecia', source: require('./assets/flags/gr.png')},
		{name: 'Groenlandia', source: require('./assets/flags/gl.png')},
		{name: 'Guadeloupe', source: require('./assets/flags/gp.png')},
		{name: 'Guam', source: require('./assets/flags/gu.png')},
		{name: 'Guatemala', source: require('./assets/flags/gt.png')},
		{name: 'Guayana Francesa', source: require('./assets/flags/gf.png')},
		{name: 'Guernsey', source: require('./assets/flags/gg.png')},
		{name: 'Guinea Bissau', source: require('./assets/flags/gw.png')},
		{name: 'Guinea Ecuatorial', source: require('./assets/flags/gq.png')},
		{name: 'Guinea', source: require('./assets/flags/gn.png')},
		{name: 'Guyana', source: require('./assets/flags/gy.png')},
		{name: 'Haití', source: require('./assets/flags/ht.png')},
		{name: 'Heard  e Islas McDonald', source: require('./assets/flags/hm.png')},
		{name: 'Honduras', source: require('./assets/flags/hn.png')},
		{name: 'Hong Kong', source: require('./assets/flags/hk.png')},
		{name: 'Hungría', source: require('./assets/flags/hu.png')},
		{name: 'India', source: require('./assets/flags/in.png')},
		{name: 'Indonesia', source: require('./assets/flags/id.png')},
		{name: 'Irak', source: require('./assets/flags/iq.png')},
		{name: 'Irán ', source: require('./assets/flags/ir.png')},
		{name: 'Irlanda', source: require('./assets/flags/ie.png')},
		{name: 'Isla de Man', source: require('./assets/flags/im.png')},
		{name: 'Islandia', source: require('./assets/flags/is.png')},
		{name: 'Islas Ultramarinas Menores de los Estados Unidos ', source: require('./assets/flags/um.png')},
		{name: 'Israel', source: require('./assets/flags/il.png')},
		{name: 'Italia', source: require('./assets/flags/it.png')},
		{name: 'Jamaica', source: require('./assets/flags/jm.png')},
		{name: 'Japón', source: require('./assets/flags/jp.png')},
		{name: 'Jersey', source: require('./assets/flags/je.png')},
		{name: 'Jordania', source: require('./assets/flags/jo.png')},
		{name: 'Kazajistán', source: require('./assets/flags/kz.png')},
		{name: 'Kenia', source: require('./assets/flags/ke.png')},
		{name: 'Kirguistán', source: require('./assets/flags/kg.png')},
		{name: 'Kiribati', source: require('./assets/flags/ki.png')},
		{name: 'Kuwait', source: require('./assets/flags/kw.png')},
		{name: 'Lao,  República Democrática Popular', source: require('./assets/flags/la.png')},
		{name: 'Lesoto', source: require('./assets/flags/ls.png')},
		{name: 'Letonia', source: require('./assets/flags/lv.png')},
		{name: 'Líbano', source: require('./assets/flags/lb.png')},
		{name: 'Liberia', source: require('./assets/flags/lr.png')},
		{name: 'Libia', source: require('./assets/flags/ly.png')},
		{name: 'Liechtenstein', source: require('./assets/flags/li.png')},
		{name: 'Lituania', source: require('./assets/flags/lt.png')},
		{name: 'Luxemburgo', source: require('./assets/flags/lu.png')},
		{name: 'Macao', source: require('./assets/flags/mo.png')},
		{name: 'Macedonia del Norte', source: require('./assets/flags/mk.png')},
		{name: 'Madagascar', source: require('./assets/flags/mg.png')},
		{name: 'Malasia', source: require('./assets/flags/my.png')},
		{name: 'Malawi', source: require('./assets/flags/mw.png')},
		{name: 'Maldivas', source: require('./assets/flags/mv.png')},
		{name: 'Malí', source: require('./assets/flags/ml.png')},
		{name: 'Malta', source: require('./assets/flags/mt.png')},
		{name: 'Malvinas [Falkland],  Islas', source: require('./assets/flags/fk.png')},
		{name: 'Marianas del Norte,  Islas', source: require('./assets/flags/mp.png')},
		{name: 'Marruecos', source: require('./assets/flags/ma.png')},
		{name: 'Marshall,  Islas', source: require('./assets/flags/mh.png')},
		{name: 'Martinique', source: require('./assets/flags/mq.png')},
		{name: 'Mauricio', source: require('./assets/flags/mu.png')},
		{name: 'Mauritania', source: require('./assets/flags/mr.png')},
		{name: 'Mayotte', source: require('./assets/flags/yt.png')},
		{name: 'México', source: require('./assets/flags/mx.png')},
		{name: 'Micronesia ', source: require('./assets/flags/fm.png')},
		{name: 'Moldavia ', source: require('./assets/flags/md.png')},
		{name: 'Mónaco', source: require('./assets/flags/mc.png')},
		{name: 'Mongolia', source: require('./assets/flags/mn.png')},
		{name: 'Montenegro', source: require('./assets/flags/me.png')},
		{name: 'Montserrat', source: require('./assets/flags/ms.png')},
		{name: 'Mozambique', source: require('./assets/flags/mz.png')},
		{name: 'Myanmar', source: require('./assets/flags/mm.png')},
		{name: 'Namibia', source: require('./assets/flags/na.png')},
		{name: 'Nauru', source: require('./assets/flags/nr.png')},
		{name: 'Navidad, Isla de', source: require('./assets/flags/cx.png')},
		{name: 'Nepal', source: require('./assets/flags/np.png')},
		{name: 'Nicaragua', source: require('./assets/flags/ni.png')},
		{name: 'Níger ', source: require('./assets/flags/ne.png')},
		{name: 'Nigeria', source: require('./assets/flags/ng.png')},
		{name: 'Niue', source: require('./assets/flags/nu.png')},
		{name: 'Norfolk, Isla', source: require('./assets/flags/nf.png')},
		{name: 'Noruega', source: require('./assets/flags/no.png')},
		{name: 'Nueva Caledonia', source: require('./assets/flags/nc.png')},
		{name: 'Nueva Zelandia', source: require('./assets/flags/nz.png')},
		{name: 'Omán', source: require('./assets/flags/om.png')},
		{name: 'Países Bajos ', source: require('./assets/flags/nl.png')},
		{name: 'Pakistán', source: require('./assets/flags/pk.png')},
		{name: 'Palaos', source: require('./assets/flags/pw.png')},
		{name: 'Palestina, Estado de', source: require('./assets/flags/ps.png')},
		{name: 'Panamá', source: require('./assets/flags/pa.png')},
		{name: 'Papúa Nueva Guinea', source: require('./assets/flags/pg.png')},
		{name: 'Paraguay', source: require('./assets/flags/py.png')},
		{name: 'Perú', source: require('./assets/flags/pe.png')},
		{name: 'Pitcairn', source: require('./assets/flags/pn.png')},
		{name: 'Polinesia Francesa', source: require('./assets/flags/pf.png')},
		{name: 'Polonia', source: require('./assets/flags/pl.png')},
		{name: 'Portugal', source: require('./assets/flags/pt.png')},
		{name: 'Puerto Rico', source: require('./assets/flags/pr.png')},
		{name: 'Reino Unido de Gran Bretaña e Irlanda del Norte ', source: require('./assets/flags/gb.png')},
		{name: 'República Árabe Siria', source: require('./assets/flags/sy.png')},
		{name: 'República Centroafricana ', source: require('./assets/flags/cf.png')},
		{name: 'República Democrática del Congo', source: require('./assets/flags/cd.png')},
		{name: 'República Popular Democrática de Corea', source: require('./assets/flags/kp.png')},
		{name: 'Reunión', source: require('./assets/flags/re.png')},
		{name: 'Ruanda', source: require('./assets/flags/rw.png')},
		{name: 'Rumania', source: require('./assets/flags/ro.png')},
		{name: 'Rusia,  Federación de', source: require('./assets/flags/ru.png')},
		{name: 'Sahara Occidental', source: require('./assets/flags/eh.png')},
		{name: 'Saint Barthélemy', source: require('./assets/flags/bl.png')},
		{name: 'Saint Martin ', source: require('./assets/flags/mf.png')},
		{name: 'Salomón, Islas', source: require('./assets/flags/sb.png')},
		{name: 'Samoa Americana', source: require('./assets/flags/as.png')},
		{name: 'Samoa', source: require('./assets/flags/ws.png')},
		{name: 'San Cristóbal y Nieves', source: require('./assets/flags/kn.png')},
		{name: 'San Marino', source: require('./assets/flags/sm.png')},
		{name: 'San Pedro y Miquelón', source: require('./assets/flags/pm.png')},
		{name: 'San Vicente y las Granadinas', source: require('./assets/flags/vc.png')},
		{name: 'Santa Helena, Ascensión y Tristán de Acuña', source: require('./assets/flags/sh.png')},
		{name: 'Santa Lucía', source: require('./assets/flags/lc.png')},
		{name: 'Santa Sede ', source: require('./assets/flags/va.png')},
		{name: 'Santo Tomé y Príncipe', source: require('./assets/flags/st.png')},
		{name: 'Senegal', source: require('./assets/flags/sn.png')},
		{name: 'Serbia', source: require('./assets/flags/rs.png')},
		{name: 'Seychelles', source: require('./assets/flags/sc.png')},
		{name: 'Sierra leona', source: require('./assets/flags/sl.png')},
		{name: 'Singapur', source: require('./assets/flags/sg.png')},
		{name: 'Sint Maarten ', source: require('./assets/flags/sx.png')},
		{name: 'Somalia', source: require('./assets/flags/so.png')},
		{name: 'Sri Lanka', source: require('./assets/flags/lk.png')},
		{name: 'Suazilandia', source: require('./assets/flags/sz.png')},
		{name: 'Sudáfrica', source: require('./assets/flags/za.png')},
		{name: 'Sudán del Sur', source: require('./assets/flags/ss.png')},
		{name: 'Sudán ', source: require('./assets/flags/sd.png')},
		{name: 'Suecia', source: require('./assets/flags/se.png')},
		{name: 'Suiza', source: require('./assets/flags/ch.png')},
		{name: 'Suriname', source: require('./assets/flags/sr.png')},
		{name: 'Svalbard y Jan Mayen', source: require('./assets/flags/sj.png')},
		{name: 'Tailandia', source: require('./assets/flags/th.png')},
		{name: 'Taiwán ', source: require('./assets/flags/tw.png')},
		{name: 'Tanzania, República Unida de', source: require('./assets/flags/tz.png')},
		{name: 'Tayikistán', source: require('./assets/flags/tj.png')},
		{name: 'Territorio Británico del Océano Índico ', source: require('./assets/flags/io.png')},
		{name: 'Tierras Australes Francesas ', source: require('./assets/flags/tf.png')},
		{name: 'Timor-Leste', source: require('./assets/flags/tl.png')},
		{name: 'Togo', source: require('./assets/flags/tg.png')},
		{name: 'Tokelau', source: require('./assets/flags/tk.png')},
		{name: 'Tonga', source: require('./assets/flags/to.png')},
		{name: 'Trinidad y Tobago', source: require('./assets/flags/tt.png')},
		{name: 'Túnez', source: require('./assets/flags/tn.png')},
		{name: 'Turcas y Caicos,  Islas', source: require('./assets/flags/tc.png')},
		{name: 'Turkmenistán', source: require('./assets/flags/tm.png')},
		{name: 'Turquía', source: require('./assets/flags/tr.png')},
		{name: 'Tuvalu', source: require('./assets/flags/tv.png')},
		{name: 'Ucrania', source: require('./assets/flags/ua.png')},
		{name: 'Uganda', source: require('./assets/flags/ug.png')},
		{name: 'Uruguay', source: require('./assets/flags/uy.png')},
		{name: 'Uzbekistán', source: require('./assets/flags/uz.png')},
		{name: 'Vanuatu', source: require('./assets/flags/vu.png')},
		{name: 'Venezuela ', source: require('./assets/flags/ve.png')},
		{name: 'Viet Nam', source: require('./assets/flags/vn.png')},
		{name: 'Vírgenes británicas, Islas', source: require('./assets/flags/vg.png')},
		{name: 'Vírgenes de los Estados Unidos, Islas', source: require('./assets/flags/vi.png')},
		{name: 'Wallis y Futuna', source: require('./assets/flags/wf.png')},
		{name: 'Yemen', source: require('./assets/flags/ye.png')},
		{name: 'Yibuti', source: require('./assets/flags/dj.png')},
		{name: 'Zambia', source: require('./assets/flags/zm.png')},
		{name: 'Zimbabue', source: require('./assets/flags/zw.png')}
	];

	return (
		<LinearGradient style={styles.container} colors={['#1e2818', '#020304']}>
		<SafeAreaView>
		<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
		<View style={{alignItems: 'center'}}>
		<Text style={styles.text}>Tus días en </Text>
		<TouchableOpacity onPress={() => {setModalVisibleCountries(true);}}>
		<Text style={[styles.text, {fontWeight: 'bold'} ]}>{countryData.name}</Text>
		</TouchableOpacity>
		<Modal
		visible={modalVisibleCountries}
		transparent={true}
		animationType='fade'
		onRequestClose={() => {setModalVisibleCountries(false);}}
		>
		<View style={{flex: 1, marginVertical: 15, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15}}>
		<ScrollView>
		<View style={{flex: 1, paddingHorizontal: 40, paddingVertical: 15, alignSelf: 'center'}}>
		{COUNTRIES_DATA.map((countryData =>
			<TouchableOpacity style={{paddingBottom: 8}} onPress={() => {setCountryData(countryData); setModalVisibleCountries(false);}}>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<Image style={styles.flag} source={countryData.source}/>
			<Text style={{color: '#2c2c2c', fontSize: 15, marginLeft: 15}}>{countryData.name}</Text>
			</View>
			</TouchableOpacity>
		))}
		</View>
		</ScrollView>
		</View>
		</Modal>
		<Image style={styles.flag} source={countryData.source}/>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
		<Text style={styles.text}>135/</Text>
		<TextInput
		style={[styles.text, {fontWeight: 'bold'} ]}
		value={maximumDays}
		onChangeText={setMaximumDays}
		/>
		</View>
		<View>
		<Text style={[styles.text, {fontSize: 15} ]}>80%</Text>
		<View style={styles.progressBar}>
		<Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: '#8BED4F', width: '50%'}}/>
		</View>
		<Text style={[styles.text, {fontSize: 15} ]}>Loading...</Text>
		</View>
		</View>
		</SafeAreaView>
		</LinearGradient>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#eeefef', 
		fontSize: 25
	},
	flag: {
		width: 50, 
		height: 50, 
		borderRadius: 25, 
		borderColor: '#000000', 
		borderWidth: 0.5	
	},
	progressBar: {
		height: 20,
		width: 200,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 5
	}
});

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
export default App;
