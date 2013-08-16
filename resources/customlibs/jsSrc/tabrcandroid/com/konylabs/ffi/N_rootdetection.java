package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.rooted.TestRoot;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_rootdetection extends JSLibrary {

 
 
	public static final String isRooted = "isRooted";
 
	String[] methods = { isRooted };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_rootdetection(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.isRooted( );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "rootdetection";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] isRooted( ){
 
		Object[] ret = null;
 Double val = new Double(com.kony.rooted.TestRoot.isRooted( ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
