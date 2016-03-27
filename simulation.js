/* start module: simulation */
$pyjs['loaded_modules']['simulation'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['simulation']['__was_initialized__']) return $pyjs['loaded_modules']['simulation'];
	var $m = $pyjs['loaded_modules']['simulation'];
	$m['__repr__'] = function() { return '<module: simulation>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'simulation';
	$m['__name__'] = __mod_name__;


	$m['collections'] = $p['___import___']('collections', null);
	$m['Registers'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'simulation';
		var $tupleassign1 = $p['__ass_unpack']($p['range'](17), 17, null);
		$cls_definition['rsi'] = $tupleassign1[0];
		$cls_definition['rdi'] = $tupleassign1[1];
		$cls_definition['rax'] = $tupleassign1[2];
		$cls_definition['rbp'] = $tupleassign1[3];
		$cls_definition['rsp'] = $tupleassign1[4];
		$cls_definition['rbx'] = $tupleassign1[5];
		$cls_definition['r1'] = $tupleassign1[6];
		$cls_definition['r2'] = $tupleassign1[7];
		$cls_definition['r3'] = $tupleassign1[8];
		$cls_definition['r4'] = $tupleassign1[9];
		$cls_definition['r5'] = $tupleassign1[10];
		$cls_definition['r6'] = $tupleassign1[11];
		$cls_definition['r7'] = $tupleassign1[12];
		$cls_definition['r8'] = $tupleassign1[13];
		$cls_definition['r9'] = $tupleassign1[14];
		$cls_definition['r10'] = $tupleassign1[15];
		$cls_definition['r11'] = $tupleassign1[16];
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Registers', $p['tuple']($bases), $data);
	})();
	$m['Simulation'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'simulation';
		$cls_definition['i'] = 123;
		$cls_definition['programText'] = '';
		$cls_definition['currentPos'] = 0;
		$cls_definition['rsi'] = 0;
		$cls_definition['rdi'] = 0;
		$cls_definition['rax'] = 0;
		$cls_definition['rbp'] = 1000;
		$cls_definition['rsp'] = 992;
		$cls_definition['rbx'] = 0;
		$cls_definition['r'] = $p['list'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$iter1_iter = $p['range'](1, 12);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						$cls_definition['i'] = $iter1_nextval['$nextval'];
						$yield_value = 0;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

				return;
			};
			return $generator;
		}()
);
		$cls_definition['stack'] = $p['dict']([[1000, 500]]);
		$cls_definition['memory'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function(input_text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input_text = arguments[1];
			}

			self['i'] = 5;
			self['programText'] = input_text;
			return null;
		}
	, 1, [null,null,['self'],['input_text']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('load_text', function(input_text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input_text = arguments[1];
			}

			self['programText'] = input_text;
			self['reset']();
			return null;
		}
	, 1, [null,null,['self'],['input_text']]);
		$cls_definition['load_text'] = $method;
		$method = $pyjs__bind_method2('parse_src', function(src) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				src = arguments[1];
			}
			var ei,eb,ans,imm,multiple,str_pos,old_str_pos,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$mul2,$mul1,$add2,$add3,s,$add1,$add6,$add7,$add4,$add5,$add8,$add9;
			if ($p['bool']($p['op_eq'](src['__getitem__'](0), '$'))) {
				return $p['float_int']($p['__getslice'](src, 1, null), 0);
			}
			if ($p['bool']($p['op_eq']($p['len'](src), 4))) {
				if ($p['bool']($p['op_eq'](src, '%rsi'))) {
					return $p['getattr'](self, 'rsi');
				}
				if ($p['bool']($p['op_eq'](src, '%esi'))) {
					return ($p['getattr'](self, 'rsi'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rdi'))) {
					return $p['getattr'](self, 'rdi');
				}
				if ($p['bool']($p['op_eq'](src, '%edi'))) {
					return ($p['getattr'](self, 'rdi'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rax'))) {
					return $p['getattr'](self, 'rax');
				}
				if ($p['bool']($p['op_eq'](src, '%eax'))) {
					return ($p['getattr'](self, 'rax'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rbp'))) {
					return $p['getattr'](self, 'rbp');
				}
				if ($p['bool']($p['op_eq'](src, '%ebp'))) {
					return ($p['getattr'](self, 'rbp'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rsp'))) {
					return $p['getattr'](self, 'rsp');
				}
				if ($p['bool']($p['op_eq'](src, '%esp'))) {
					return ($p['getattr'](self, 'rsp'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rbx'))) {
					return $p['getattr'](self, 'rbx');
				}
				if ($p['bool']($p['op_eq'](src, '%ebx'))) {
					return ($p['getattr'](self, 'rbx'))&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%r8'))) {
					return $p['getattr'](self, 'r')['__getitem__'](8);
				}
				if ($p['bool']($p['op_eq'](src, '%r9'))) {
					return $p['getattr'](self, 'r')['__getitem__'](9);
				}
				if ($p['bool']($p['op_eq'](src, '%r10'))) {
					return $p['getattr'](self, 'r')['__getitem__'](10);
				}
				if ($p['bool']($p['op_eq'](src, '%r11'))) {
					return $p['getattr'](self, 'r')['__getitem__'](11);
				}
			}
			if ($p['bool']($p['op_eq']($p['len'](src), 3))) {
				if ($p['bool']($p['op_eq'](src, '%si'))) {
					return ($p['getattr'](self, 'rsi'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%di'))) {
					return ($p['getattr'](self, 'rdi'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%ax'))) {
					return ($p['getattr'](self, 'rax'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%ah'))) {
					return (($p['getattr'](self, 'rax'))>>(1))&(15);
				}
				if ($p['bool']($p['op_eq'](src, '%al'))) {
					return ($p['getattr'](self, 'rax'))&(15);
				}
				if ($p['bool']($p['op_eq'](src, '%bp'))) {
					return ($p['getattr'](self, 'rbp'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%sp'))) {
					return ($p['getattr'](self, 'rsp'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%bx'))) {
					return ($p['getattr'](self, 'rbx'))&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%bh'))) {
					return (($p['getattr'](self, 'rbx'))>>(1))&(15);
				}
				if ($p['bool']($p['op_eq'](src, '%bl'))) {
					return ($p['getattr'](self, 'rbx'))&(15);
				}
			}
			str_pos = 0;
			while ($p['bool'](!$p['op_eq'](src['__getitem__'](str_pos), '('))) {
				str_pos = $p['__op_add']($add1=str_pos,$add2=1);
				if ($p['bool']($p['op_eq'](str_pos, $p['len'](src)))) {
					imm = $p['float_int'](src, 0);
					if ($p['bool']($p['getattr'](self, 'memory')['__contains__'](imm))) {
						return $p['getattr'](self, 'memory')['__getitem__'](imm);
					}
					return 0;
				}
				if ($p['bool']($p['op_eq'](src['__getitem__'](str_pos), '('))) {
					if ($p['bool']($p['op_eq'](str_pos, 0))) {
						imm = 0;
						break;
					}
					else {
						imm = $p['float_int']($p['__getslice'](src, 0, str_pos), 0);
						break;
					}
				}
			}
			str_pos = $p['__op_add']($add3=str_pos,$add4=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq'](src['__getitem__'](str_pos), ','))) {
				str_pos = $p['__op_add']($add5=str_pos,$add6=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				eb = 0;
			}
			else {
				eb = $p['__getslice'](src, old_str_pos, str_pos);
			}
			str_pos = $p['__op_add']($add7=str_pos,$add8=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq'](src['__getitem__'](str_pos), ','))) {
				str_pos = $p['__op_add']($add9=str_pos,$add10=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				ei = 0;
			}
			else {
				ei = $p['__getslice'](src, old_str_pos, str_pos);
			}
			str_pos = $p['__op_add']($add11=str_pos,$add12=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq']($p['str']['__getitem__'](str_pos), ')'))) {
				str_pos = $p['__op_add']($add13=str_pos,$add14=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				s = 0;
			}
			else {
				s = $p['float_int']($p['__getslice'](src, old_str_pos, str_pos), 0);
			}
			ans = imm;
			ans = $p['__op_add']($add15=ans,$add16=self['parse_src'](eb));
			multiple = self['parse_src'](ei);
			if ($p['bool']($p['op_eq'](s, 0))) {
				s = 1;
			}
			ans = $p['__op_add']($add17=ans,$add18=(typeof ($mul1=s)==typeof ($mul2=multiple) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
			if ($p['bool']($p['getattr'](self, 'memory')['__contains__'](ans))) {
				return $p['getattr'](self, 'memory')['__getitem__'](ans);
			}
			else {
				return 0;
			}
			return null;
		}
	, 1, [null,null,['self'],['src']]);
		$cls_definition['parse_src'] = $method;
		$method = $pyjs__bind_method2('parse_destination', function(dest) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dest = arguments[1];
			}
			var ei,$add25,eb,ans,$add29,$add28,$add21,$add20,$add22,imm,$add24,$add27,$add26,multiple,str_pos,old_str_pos,$mul4,$mul3,$add19,$add32,$add33,$add30,$add31,$add36,$add34,$add35,s,$add23;
			if ($p['bool']($p['op_eq']($p['len'](dest), 4))) {
				return dest;
			}
			if ($p['bool']($p['op_eq']($p['len'](dest), 3))) {
				return dest;
			}
			str_pos = 0;
			while ($p['bool'](!$p['op_eq'](dest['__getitem__'](str_pos), '('))) {
				str_pos = $p['__op_add']($add19=str_pos,$add20=1);
			}
			if ($p['bool']($p['op_eq'](str_pos, 0))) {
				imm = 0;
			}
			else {
				imm = $p['float_int']($p['__getslice'](dest, 0, str_pos), 0);
			}
			str_pos = $p['__op_add']($add21=str_pos,$add22=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq'](dest['__getitem__'](str_pos), ','))) {
				str_pos = $p['__op_add']($add23=str_pos,$add24=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				eb = 0;
			}
			else {
				eb = $p['__getslice'](dest, old_str_pos, str_pos);
			}
			str_pos = $p['__op_add']($add25=str_pos,$add26=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq'](dest['__getitem__'](str_pos), ','))) {
				str_pos = $p['__op_add']($add27=str_pos,$add28=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				ei = 0;
			}
			else {
				ei = $p['__getslice'](dest, old_str_pos, str_pos);
			}
			str_pos = $p['__op_add']($add29=str_pos,$add30=1);
			old_str_pos = str_pos;
			while ($p['bool'](!$p['op_eq']($p['str']['__getitem__'](str_pos), ')'))) {
				str_pos = $p['__op_add']($add31=str_pos,$add32=1);
			}
			if ($p['bool']($p['op_eq'](old_str_pos, str_pos))) {
				s = 0;
			}
			else {
				s = $p['float_int']($p['__getslice'](dest, old_str_pos, str_pos), 0);
			}
			ans = imm;
			ans = $p['__op_add']($add33=ans,$add34=self['parse_src'](eb));
			multiple = self['parse_src'](ei);
			if ($p['bool']($p['op_eq'](s, 0))) {
				s = 1;
			}
			ans = $p['__op_add']($add35=ans,$add36=(typeof ($mul3=s)==typeof ($mul4=multiple) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			return ans;
		}
	, 1, [null,null,['self'],['dest']]);
		$cls_definition['parse_destination'] = $method;
		$method = $pyjs__bind_method2('set_reg', function(src, dest_val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				src = arguments[1];
				dest_val = arguments[2];
			}

			if ($p['bool']($p['op_eq']($p['len'](src), 4))) {
				if ($p['bool']($p['op_eq'](src, '%rsi'))) {
					self['rsi'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%esi'))) {
					self['rsi'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rdi'))) {
					self['rdi'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%edi'))) {
					self['rdi'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rax'))) {
					self['rax'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%eax'))) {
					self['rax'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rbp'))) {
					self['rbp'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%ebp'))) {
					self['rbp'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rsp'))) {
					self['rsp'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%esp'))) {
					self['rsp'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%rbx'))) {
					self['rbx'] = dest_val;
				}
				if ($p['bool']($p['op_eq'](src, '%ebx'))) {
					self['rbx'] = (dest_val)&(65535);
				}
				if ($p['bool']($p['op_eq'](src, '%r8'))) {
					$p['getattr'](self, 'r')['__setitem__'](8, dest_val);
				}
				if ($p['bool']($p['op_eq'](src, '%r9'))) {
					$p['getattr'](self, 'r')['__setitem__'](9, dest_val);
				}
				if ($p['bool']($p['op_eq'](src, '%r10'))) {
					$p['getattr'](self, 'r')['__setitem__'](10, dest_val);
				}
				if ($p['bool']($p['op_eq'](src, '%r11'))) {
					$p['getattr'](self, 'r')['__setitem__'](11, dest_val);
				}
			}
			if ($p['bool']($p['op_eq']($p['len'](src), 3))) {
				if ($p['bool']($p['op_eq'](src, '%si'))) {
					self['rsi'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%di'))) {
					self['rdi'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%ax'))) {
					self['rax'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%ah'))) {
					self['rax'] = ((dest_val)&(15))<<(1);
				}
				if ($p['bool']($p['op_eq'](src, '%al'))) {
					self['rax'] = (dest_val)&(15);
				}
				if ($p['bool']($p['op_eq'](src, '%bp'))) {
					self['rbp'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%sp'))) {
					self['rsp'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%bx'))) {
					self['rbx'] = (dest_val)&(255);
				}
				if ($p['bool']($p['op_eq'](src, '%bh'))) {
					self['rbx'] = ((dest_val)&(15))<<(1);
				}
				if ($p['bool']($p['op_eq'](src, '%bl'))) {
					self['rbx'] = (dest_val)&(15);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['src'],['dest_val']]);
		$cls_definition['set_reg'] = $method;
		$method = $pyjs__bind_method2('step', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var mnemonic,destination,oval,operand,$add59,$add61,$add60,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$add40,addend2,addend1,src_val,$sub3,$sub2,$sub1,$sub4,$add51,dest,str_pos,old_str_pos,$add52,$add53,$mul6,$mul5,$add50,src,$add38,$add39,$add54,$add55,$add56,$add57,$add58,current_instr,$add62,$add37,sum,dest_val,$add45;
			current_instr = $p['getattr'](self, 'programText')['__getitem__']($p['getattr'](self, 'currentPos'));
			str_pos = 0;
			while ($p['bool'](!$p['op_eq'](current_instr['__getitem__'](str_pos), ' '))) {
				str_pos = $p['__op_add']($add37=str_pos,$add38=1);
			}
			mnemonic = $p['__getslice'](current_instr, 0, str_pos);
			str_pos = $p['__op_add']($add39=str_pos,$add40=1);
			if ($p['bool']($p['op_eq'](mnemonic, 'mov'))) {
				old_str_pos = str_pos;
				while ($p['bool'](!$p['op_eq'](current_instr['__getitem__'](str_pos), ','))) {
					str_pos = $p['__op_add']($add41=str_pos,$add42=1);
				}
				src = $p['__getslice'](current_instr, old_str_pos, str_pos);
				str_pos = $p['__op_add']($add43=str_pos,$add44=2);
				old_str_pos = str_pos;
				dest = $p['__getslice'](current_instr, str_pos, null);
				src_val = self['parse_src'](src);
				dest_val = self['parse_destination'](dest);
				if ($p['bool'](($p['type'](dest_val) === $p['float_int']))) {
					$p['getattr'](self, 'memory')['__setitem__'](dest_val, src_val);
				}
				else {
					self['set_reg'](dest_val, src_val);
				}
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'push'))) {
				operand = $p['__getslice'](current_instr, str_pos, null);
				self['rsp'] = $p['__op_sub']($sub1=$p['getattr'](self, 'rsp'),$sub2=8);
				oval = self['parse_src'](operand);
				$p['getattr'](self, 'memory')['__setitem__']($p['getattr'](self, 'rsp'), oval);
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'pop'))) {
				operand = $p['__getslice'](current_instr, str_pos, null);
				self['set_reg'](operand, $p['getattr'](self, 'memory')['__getitem__']($p['getattr'](self, 'rsp')));
				self['rsp'] = $p['__op_add']($add45=$p['getattr'](self, 'rsp'),$add46=8);
				$p['printFunc']([$p['str']($p['getattr'](self, 'rax'))], 1);
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'lea'))) {
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'add'))) {
				old_str_pos = str_pos;
				while ($p['bool'](!$p['op_eq'](current_instr['__getitem__'](str_pos), ','))) {
					str_pos = $p['__op_add']($add47=str_pos,$add48=1);
				}
				src = $p['__getslice'](current_instr, old_str_pos, str_pos);
				str_pos = $p['__op_add']($add49=str_pos,$add50=2);
				old_str_pos = str_pos;
				dest = $p['__getslice'](current_instr, str_pos, null);
				addend1 = self['parse_src'](src);
				addend2 = self['parse_src'](dest);
				sum = $p['__op_add']($add51=addend1,$add52=addend2);
				destination = self['parse_destination'](dest);
				if ($p['bool'](($p['type'](destination) === $p['float_int']))) {
					$p['getattr'](self, 'memory')['__setitem__'](destination, sum);
				}
				else {
					self['set_reg'](destination, sum);
				}
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'sub'))) {
				old_str_pos = str_pos;
				while ($p['bool'](!$p['op_eq'](current_instr['__getitem__'](str_pos), ','))) {
					str_pos = $p['__op_add']($add53=str_pos,$add54=1);
				}
				src = $p['__getslice'](current_instr, old_str_pos, str_pos);
				str_pos = $p['__op_add']($add55=str_pos,$add56=2);
				old_str_pos = str_pos;
				dest = $p['__getslice'](current_instr, str_pos, null);
				addend1 = self['parse_src'](src);
				addend2 = self['parse_src'](dest);
				sum = $p['__op_sub']($sub3=addend1,$sub4=addend2);
				destination = self['parse_destination'](dest);
				if ($p['bool'](($p['type'](destination) === $p['float_int']))) {
					$p['getattr'](self, 'memory')['__setitem__'](destination, sum);
				}
				else {
					self['set_reg'](destination, sum);
				}
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'imul'))) {
				old_str_pos = str_pos;
				while ($p['bool'](!$p['op_eq'](current_instr['__getitem__'](str_pos), ','))) {
					str_pos = $p['__op_add']($add57=str_pos,$add58=1);
				}
				src = $p['__getslice'](current_instr, old_str_pos, str_pos);
				str_pos = $p['__op_add']($add59=str_pos,$add60=2);
				old_str_pos = str_pos;
				dest = $p['__getslice'](current_instr, str_pos, null);
				addend1 = self['parse_src'](src);
				addend2 = self['parse_src'](dest);
				sum = (typeof ($mul5=addend1)==typeof ($mul6=addend2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6));
				destination = self['parse_destination'](dest);
				if ($p['bool'](($p['type'](destination) === $p['float_int']))) {
					$p['getattr'](self, 'memory')['__setitem__'](destination, sum);
				}
				else {
					self['set_reg'](destination, sum);
				}
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'ret'))) {
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'call'))) {
			}
			else if ($p['bool']($p['op_eq'](mnemonic, 'cmp'))) {
			}
			else {
				$p['printFunc'](['error!\n'], 1);
			}
			self['currentPos'] = $p['__op_add']($add61=$p['getattr'](self, 'currentPos'),$add62=1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['step'] = $method;
		$method = $pyjs__bind_method2('insert', function(instr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				instr = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['instr']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self = $m['Simulation']($p['getattr'](self, 'programText'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('skip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['skip'] = $method;
		$method = $pyjs__bind_method2('get_stack', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'stack');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_stack'] = $method;
		$method = $pyjs__bind_method2('get_registers', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 0;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_registers'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Simulation', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end simulation */


/* end module: simulation */


/*
PYJS_DEPS: ['collections']
*/
